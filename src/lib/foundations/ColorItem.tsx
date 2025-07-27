interface ColorItemProps {
  colors: [string, string];
}

const ColorItem = ({ colors }: ColorItemProps) => {
  const [shade, color] = colors;
  const textColor = +shade > 500 ? 'white' : 'black';

  return (
    <li
      className='flex w-60 h-10 items-center list-none justify-between px-3'
      style={{ background: color, color: textColor }}
    >
      <span>{shade}</span>
      <span>{color}</span>
    </li>
  );
};

export default ColorItem;
