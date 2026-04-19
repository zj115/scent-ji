import useReveal from '../hooks/useReveal';
import '../styles/animations.css';

export default function Reveal({ children, className = '', variant = '', delay = 0, ...props }) {
  const [ref, visible] = useReveal();

  const classes = [
    'reveal',
    variant ? `reveal--${variant}` : '',
    delay ? `reveal--delay-${delay}` : '',
    visible ? 'reveal--visible' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div ref={ref} className={classes} {...props}>
      {children}
    </div>
  );
}
