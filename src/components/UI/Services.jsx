import React from 'react'
import '../../styles/projectDet.css';  
import BackButton from './Scrolling/Back';

const Services = () => {
  return (
    <section>
    <div className='container'>
    <div className='about__wrapper'>
        <div className='about__content_services'>
            <h5 className='subtitle_services'> Comprehensive Data Science Solutions to Help Your Business Thrive </h5>
            <br></br>
            
            <h2 className='subheader'> 
                <p className='description about__content-desc'>
                <ul>
                    <li className='lists_services'>Machine Learning: We build systems that can learn from data and find relationships between variables to predict outcomes for your business.</li>
                    <br></br>
                    <li className='lists_services'>Statistical Analysis: We provide advanced statistical analysis services that can help businesses gain valuable insights from their data.</li>
                    <br></br>
                    <li className='lists_services'>Marketing Research and Analytics: We combine marketing research and data science for more in-depth findings that can help businesses optimize their marketing efforts.</li>
                    <br></br>
                    <li className='lists_services'>Data Visualization and Dashboarding: We create easy-to-use and visually appealing dashboards using tools like Power BI and R Shiny that can help businesses understand and act on their data.</li>
                    <br></br>
                    <li className='lists_services'>Corporate Training: We offer training on R programming, statistical analysis, R Shiny, Power BI, and other data science topics to help businesses and their teams build their skills and expertise. We also provide conjoint training that can be customized to meet your specific needs.</li>
                </ul> 
                </p>
                </h2>
                <br></br> <br></br>
            
            <h2 className='subheader'>
            <p className='description about__content-desc'>
            At Datamotus, we provide comprehensive data science solutions that can help businesses unlock the full potential of their data. 
            Whether you need machine learning, statistical analysis, marketing research, data visualization, dashboarding, 
            or corporate training services, we have the expertise and experience to deliver results. Contact us today to learn more about our services and how we can help your business thrive.

            </p>  
            </h2>
            <br></br> <br></br>

           

            
        </div>
        <div className='about__img'>
            {/* <img src={aboutImg} alt="" /> */}
        </div>
    </div>
</div>
</section>
    
  )
}
export default Services;
