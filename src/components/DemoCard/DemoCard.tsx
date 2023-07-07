import "./_demoCard.css";

export default function DemoCard({ header, children, isActive, onClick }: any) {
  return (
    <div className={isActive === true ? "card-root-open" : "card-root-close"}>
      <div className="card-headline" onClick={onClick}>
        <h3 className="card-headline-title">{header}</h3>
        <div>
          <span
            className={isActive === true ? "card-root-chevron-open" : "card-root-chevron-close"}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </span>
        </div>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}