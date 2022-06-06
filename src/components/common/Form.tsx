type Props = {
  onSubmit?: any;
  children?: JSX.Element;
};

export const Form: React.FC<Props> = ({ onSubmit, children }) => {
  return (
    <>
      <form onSubmit={onSubmit}>{children}</form>
    </>
  );
};
