import PropTypes from 'prop-types';  // Import PropTypes for prop validation
import { motion } from 'framer-motion';
import ConstructionImage from '../assets/Industries/construction.png';
import EducationImage from '../assets/Industries/education.png';
import ManufactureImage from '../assets/Industries/manufacture.png';
import MediaImage from '../assets/Industries/media.png';
import ProfessionalImage from '../assets/Industries/professional.png';
import TechnologyImage from '../assets/Industries/technology.png';


// IndustryCard Component
const IndustryCard = ({ title, description, imageSrc, index }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 0.9, y: 0 }}  // Adjusted opacity to match scroll section
      transition={{ delay: index * 0.1, duration: 0.4 }}  // Slightly adjusted for smoother animation
    >
      <img 
        src={imageSrc} 
        alt={`${title} industry`}  // Improved alt text for accessibility
        className="w-full h-48 object-cover" 
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a 
          href="#" 
          className="text-blue-600 font-semibold flex items-center"
          target="_blank"  // Opens link in a new tab
          rel="noopener noreferrer"  // Security measure for external links
        >
          Learn more
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

// Adding PropTypes for props validation
IndustryCard.propTypes = {
  title: PropTypes.string.isRequired,      // Title must be a string and is required
  description: PropTypes.string.isRequired, // Description must be a string and is required
  imageSrc: PropTypes.string.isRequired,   // Image source is required and must be a string
  index: PropTypes.number.isRequired,      // Index must be a number and is required
};

// IndustriesGrid Component
const IndustriesGrid = () => {
  const industries = [
    {
      title: 'Construction',
      description: 'With Dropbox for teams, you can store, access, preview, edit and transfer CAD, BIM, PDF and visual content files from anywhere.',
      imageSrc: ConstructionImage,  
    },
    {
      title: 'Media',
      description: 'Create a flexible media workspace that connects your teams, content, and tools together.',
      imageSrc: MediaImage,  
    },
    {
      title: 'Technology',
      description: 'Product ideation to development, streamline technology workflows so you can focus on turning great ideas into products people love.',
      imageSrc: TechnologyImage,  
    },
    {
      title: 'Professional services',
      description: 'Make clients happier with easy collaboration, boosted productivity, and one organized place to get things done.',
      imageSrc: ProfessionalImage,  
    },
    {
      title: 'Manufacturing',
      description: 'Design and engineering teams easily collaborate, managing complex reviews and sharing large files seamlessly.',
      imageSrc: ManufactureImage,  
    },
    {
      title: 'Education',
      description: 'Power student learning, faculty research, and staff operations on Dropbox Education\'s secure cloud collaboration platform.',
      imageSrc: EducationImage,  
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}  
        >
          Dropbox empowers across industries
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <IndustryCard 
              key={industry.title} 
              title={industry.title} 
              description={industry.description} 
              imageSrc={industry.imageSrc} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesGrid;
