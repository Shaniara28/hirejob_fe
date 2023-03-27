import style from '../../../styles/Landing.module.css';

const SectionPage = ({ children, embedSection }) => {
  return (
    <div className={`background ${embedSection}`}>
      <div className={`${style.landing} container`}>
        <div className="row">
          <div className="col-12">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default SectionPage;
