import Breadcrumbs from '@/components/common/Layout/Breadcrumbs/Breadcrumbs';
import PageTitle from '@/components/layout/PageTitle/PageTitle';

const About = () => {
  return (
    <section>
      <div className="pageHeader">
        <PageTitle title="병원" />
        <Breadcrumbs name="병원" />
      </div>
    </section>
  );
};

export default About;
