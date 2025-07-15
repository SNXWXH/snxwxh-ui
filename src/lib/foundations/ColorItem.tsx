interface ColorItemProps {
  color: {
    shade: number;
    color: string;
  };
}

const ColorItem = ({ color }: ColorItemProps) => {
  const textColor = color.shade > 500 ? 'white' : 'black';
  return (
    <>
      <li
        style={{
          background: color.color,
          display: 'flex',
          width: '240px',
          height: '44px',
          alignItems: 'center',
          listStyleType: 'none',
          justifyContent: 'space-between',
          padding: '0 12px',
          color: textColor,
        }}
      >
        <span>{color.shade}</span>
        <span>{color.color}</span>
      </li>
    </>
  );
};

export default ColorItem;
