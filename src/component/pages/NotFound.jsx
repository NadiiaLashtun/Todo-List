import NotFoundImg from "/src/assets/not-found.png";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <img
        src={NotFoundImg}
        alt="Not found"
        className="h-1/3 w-1/3 md:h-1/7 md:w-1/7"
      />
      <h1 className="text-4xl font-extrabold">Page not found</h1>
      <p className="text-center md:max-w-1/2">
        The page you’re looking for doesn’t exist or has been moved. Please
        check the URL or return to the homepage to continue. If you think this
        is a mistake, try refreshing the page.
      </p>
    </div>
  );
};

export default NotFound;
