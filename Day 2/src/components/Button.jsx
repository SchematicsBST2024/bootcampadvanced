const Button = (props) => {
  const { activeStudent, type, title = 'Mr', children, key, onClick } = props;

  return (
    <button type={type} key={key} onClick={onClick}>
      <div>{activeStudent.name}</div>
      {title}. {children}
    </button>
  );
};

export default Button;
