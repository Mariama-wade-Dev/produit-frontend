const AuthCard = ({ children, width = '310px', height = '340px' }) => (
  <div
    className="bg-white rounded-sm shadow-2xl p-5 flex flex-col justify-between"
    style={{ width, height }}
  >
    {children}
  </div>
);

export default AuthCard;