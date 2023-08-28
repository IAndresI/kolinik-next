interface ISaleProps {}

export const Sale = (props: ISaleProps) => {
  return (
    <section className="sale">
      <div className="container">
        <div className="sale__inner">
          <div className="sale__description">
            <div className="sale__title">
              30% Off Any Diganestic Let`s Check
            </div>
            <div className="slae__text">
              You can get upto 30% off for 45 days in here! So Contact with Us{" "}
            </div>
          </div>
          <a href="/service" className="sale__link">
            get services
          </a>
        </div>
      </div>
    </section>
  );
};
