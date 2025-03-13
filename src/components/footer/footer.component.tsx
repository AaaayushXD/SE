export const FooterComponent = () => {
  return (
    <div className="w-full h-full bg-[#1d1e27] p-4 text-white">
      <div className="w-full h-full flex justify-center items-center">
        <p>Copyright &copy; Aayush Lamichhane {new Date().getFullYear()}</p>
      </div>
    </div>
  );
};
