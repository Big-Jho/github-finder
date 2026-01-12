function Container({ children, classes }) {
  return (
    <div className={`container p-4 mx-auto ${classes ? classes : ""} `}>
      {children}
    </div>
  );
}

export default Container;
