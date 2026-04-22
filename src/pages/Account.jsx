import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabase';

export default function Account() {
  const { user, signOut, loading } = useAuth();
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user) {
      fetchOrders();
    }
  }, [user]);

  const fetchOrders = async () => {
    try {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setOrders(data || []);
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoadingOrders(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  if (loading) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p>加载中...</p>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '32px', marginBottom: '8px' }}>我的账户</h1>
        <p style={{ color: '#666' }}>{user.email}</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '40px' }}>
        <aside>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <a href="#profile" style={{ padding: '12px 16px', borderRadius: '4px', backgroundColor: '#f5f5f5' }}>
              个人信息
            </a>
            <a href="#orders" style={{ padding: '12px 16px', borderRadius: '4px' }}>
              我的订单
            </a>
            <button
              onClick={handleSignOut}
              style={{ padding: '12px 16px', borderRadius: '4px', border: 'none', background: 'none', textAlign: 'left', cursor: 'pointer', color: '#c33' }}
            >
              退出登录
            </button>
          </nav>
        </aside>

        <main>
          <section id="profile" style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '24px' }}>个人信息</h2>
            <div style={{ backgroundColor: '#f9f9f9', padding: '24px', borderRadius: '8px' }}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px', color: '#666' }}>姓名</label>
                <p>{user.user_metadata?.name || '未设置'}</p>
              </div>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px', color: '#666' }}>邮箱</label>
                <p>{user.email}</p>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px', color: '#666' }}>注册时间</label>
                <p>{new Date(user.created_at).toLocaleDateString('zh-CN')}</p>
              </div>
            </div>
          </section>

          <section id="orders">
            <h2 style={{ fontSize: '24px', marginBottom: '24px' }}>我的订单</h2>
            {loadingOrders ? (
              <p>加载订单中...</p>
            ) : orders.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '48px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
                <p style={{ marginBottom: '16px', color: '#666' }}>您还没有任何订单</p>
                <Link to="/shop" className="btn-primary">
                  开始购物
                </Link>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {orders.map((order) => (
                  <div
                    key={order.id}
                    style={{
                      border: '1px solid #e0e0e0',
                      borderRadius: '8px',
                      padding: '20px',
                      backgroundColor: '#fff'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <div>
                        <p style={{ fontWeight: '600', marginBottom: '4px' }}>订单号: {order.order_number}</p>
                        <p style={{ fontSize: '14px', color: '#666' }}>
                          {new Date(order.created_at).toLocaleDateString('zh-CN')}
                        </p>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <p style={{ fontSize: '18px', fontWeight: '600' }}>¥{order.total_amount}</p>
                        <p style={{ fontSize: '14px', color: '#666' }}>{order.status}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}
