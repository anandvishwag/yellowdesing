import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const {
    query: { slug },
  } = req;

  const serviceData = [
    {
      id: 1,
      page_title: "Planing",
      slug: "planing",
      featured_image: "/images/services/planing.jpg",
      title: "We offer the best planning service",
      subtitle: "About Planning Service in Yellow Wood Design & Constructions",
      service_description: "<p> Planning is the foundational stage of any construction project, serving as the blueprint for success. At Yellow Wood Design & Construction, our planning services encompass a thorough analysis of your project requirements, including budget, timeline, and design goals. We conduct site evaluations, feasibility studies, and zoning assessments to ensure that every aspect of the plan aligns with your vision and complies with regulatory requirements.</p> <p>Our team collaborates closely with you to develop a comprehensive plan that outlines the project scope, identifies key milestones, and establishes clear objectives. Through meticulous planning and attention to detail, we minimize risks, streamline workflows, and optimize resources to deliver successful outcomes.</p>",
      faqs: [
        {
          ques: "1. What is the importance of planning in a construction project?",
          ans: "Planning is crucial as it sets the foundation for a successful construction project. It helps in defining project scope, budget, timeline, and identifying potential risks and challenges."
        },
        {
          ques: "2. How does Yellow Wood Design & Construction approach the planning process?",
          ans: "At Yellow Wood, we take a collaborative approach to planning, working closely with clients to understand their vision, goals, and constraints. We conduct thorough site analysis, feasibility studies, and regulatory assessments to develop a comprehensive plan tailored to each project."
        },
        {
          ques: "3. What deliverables can I expect from the planning phase?",
          ans: "During the planning phase, you can expect to receive a detailed project scope, timeline, budget estimates, and a roadmap for project execution. We also provide recommendations for design concepts, materials, and construction methods based on your preferences and requirements."
        },
        {
          ques: "4. How does planning help in mitigating risks and ensuring project success?",
          ans: "By identifying potential risks and challenges early in the planning process, we can develop strategies to mitigate them effectively. This proactive approach helps in minimizing delays, cost overruns, and other unforeseen issues, ensuring smooth project execution and successful outcomes."
        },
        {
          ques: "5. Can I make changes to the plan once it's finalized?",
          ans: "While changes are possible, they may impact project timelines and budgets. We encourage open communication throughout the planning process to accommodate any changes or modifications as needed, ensuring that the final plan aligns with your vision and objectives."
        }
      ]
    },
    {
      id: 2,
      page_title: "2D Design",
      slug: "2d-design",
      featured_image: "/images/services/planing.jpg",
      title: "We offer the best 2D Design service",
      subtitle: "About 2D Design Service in Yellow Wood Design & Constructions",
      service_description: "<p> Our 2D design services bring your vision to life with precision and clarity. Using advanced software tools and techniques, we create detailed floor plans, layouts, and schematics that serve as the foundation for your project. From spatial organization to circulation flow and structural elements, our 2D designs capture every aspect of your vision with accuracy and detail.</p> <p>Whether you're remodeling an existing space or starting from scratch, our skilled designers collaborate closely with you to refine concepts, explore options, and tailor the design to your specific needs and preferences. With our 2D designs, you can visualize the layout, proportions, and functionality of your space before construction begins, ensuring that every detail is carefully considered and optimized for efficiency and aesthetics.</p>",
      faqs: [
        {
          ques: "1. What is 2D design, and why is it important in construction projects?",
          ans: "2D design involves creating two-dimensional representations of architectural plans, layouts, and schematics. It is essential for visualizing and communicating design concepts, spatial arrangements, and construction details accurately."
        },
        {
          ques: "2. How does Yellow Wood Design & Construction create 2D designs?",
          ans: "We utilize advanced software tools and techniques to develop precise and detailed 2D drawings that capture every aspect of the project, from floor plans and elevations to structural elements and interior layouts."
        },
        {
          ques: "3. What are the benefits of using 2D design in the construction process?",
          ans: "2D design allows clients and stakeholders to visualize the project before construction begins, making it easier to review and refine design concepts, identify potential issues, and make informed decisions. It also serves as a reference for contractors and builders during the construction phase."
        },
        {
          ques: "4. Can I provide input or make changes to the 2D designs?",
          ans: "Yes, we encourage client input and collaboration throughout the design process. Your feedback is essential in ensuring that the final 2D designs meet your expectations and requirements. We are flexible and willing to make adjustments as needed to accommodate your preferences."
        },
        {
          ques: "5. How do I receive the final 2D designs?",
          ans: "Once the 2D designs are finalized, we provide them to you in digital format for review and approval. We can also assist in printing hard copies or sharing electronic files with other stakeholders involved in the project."
        }
      ]
    },
    {
      id: 3,
      page_title: "3D Elevation",
      slug: "3d-elevation",
      featured_image: "/images/services/planing.jpg",
      title: "We offer the best 3D Elevation service",
      subtitle: "About 3D Elevation Service in Yellow Wood Design & Constructions",
      service_description: "<p>Experience your project in stunning detail with our immersive 3D elevation services. Using cutting-edge technology and rendering software, we transform 2D plans into realistic three-dimensional visualizations that provide a lifelike preview of the final outcome. From exterior facades to landscaping elements and architectural details, our 3D elevations allow you to explore every angle and perspective, gaining insight into the spatial relationships, proportions, and design features of your project.</p> <p>Whether you're designing a residential home, commercial building, or landscape, our 3D elevations offer invaluable visualization tools that empower you to make informed decisions, communicate design intent, and bring your vision to life with confidence and clarity.</p>",
      faqs: [
        {
          ques: "1. What are 3D elevation services, and how do they benefit construction projects?",
          ans: "3D elevation services involve creating three-dimensional visualizations of architectural designs, allowing clients to see a realistic representation of the building's exterior. These services help in visualizing design concepts, understanding spatial relationships, and making informed decisions before construction begins."
        },
        {
          ques: "2. How does Yellow Wood Design & Construction create 3D elevations?",
          ans: "We utilize advanced rendering software and techniques to transform 2D architectural plans into lifelike 3D visualizations. Our skilled designers add textures, colors, and lighting effects to create realistic representations of the building's exterior, including facades, landscaping elements, and architectural details."
        },
        {
          ques: "3. What are the advantages of using 3D elevations in the design process?",
          ans: "3D elevations provide clients with a comprehensive understanding of the project's exterior appearance, allowing them to visualize the building from different angles and perspectives. This helps in identifying design flaws, exploring design options, and ensuring that the final design meets aesthetic and functional requirements."
        },
        {
          ques: "4. Can I make changes to the 3D elevations once they're created?",
          ans: "Yes, we welcome client feedback and input throughout the design process. If you have any revisions or modifications to the 3D elevations, we can incorporate them into the design to ensure that the final visualization accurately reflects your vision and preferences."
        },
        {
          ques: "5. How long does it take to create 3D elevations?",
          ans: "The time required to create 3D elevations depends on the complexity of the project and the level of detail required. Typically, it takes a few days to a few weeks to complete the 3D visualization process, including revisions based on client feedback."
        }
      ]
    },
    {
      id: 4,
      page_title: "Interior Designing",
      slug: "interior-designing",
      featured_image: "/images/services/planing.jpg",
      title: "We offer the best Interior Designing service",
      subtitle: "About Interior Designing Service in Yellow Wood Design & Constructions",
      service_description: "<p>Interior design is the art of enhancing the functionality, aesthetics, and ambiance of interior spaces. At Yellow Wood Design & Construction, our interior design services are tailored to your individual style, preferences, and lifestyle. Whether you're renovating a single room or designing an entire home, our team of experienced designers collaborates closely with you to create personalized interiors that reflect your personality and enhance your quality of life.</p> <p>From conceptualization to implementation, we guide you through every step of the design process, offering creative solutions, innovative ideas, and expert guidance along the way. Whether you prefer modern minimalism, classic elegance, or eclectic charm, we curate custom interiors that inspire and delight, blending form and function to create spaces that are as beautiful as they are functional.</p>",
      faqs: [
        {
          ques: "1. What is interior designing, and why is it important for residential and commercial spaces?",
          ans: "Interior designing involves enhancing the functionality, aesthetics, and ambiance of interior spaces through thoughtful design solutions. It is essential for creating environments that are both visually appealing and conducive to the needs and preferences of occupants."
        },
        {
          ques: "2. How does Yellow Wood Design & Construction approach interior designing projects?",
          ans: "At Yellow Wood, we take a client-centered approach to interior designing, collaborating closely with clients to understand their lifestyle, preferences, and design aspirations. Our team combines creativity, innovation, and expertise to curate custom interiors that reflect the client's personality and enhance the functionality and beauty of their space."
        },
        {
          ques: "3. What services are included in Yellow Wood's interior designing offerings?",
          ans: "Our interior designing services encompass a wide range of offerings, including space planning, furniture selection, color consultation, lighting design, material selection, and accessorizing. We work with clients to create cohesive design schemes that harmonize with their vision and elevate the overall aesthetic appeal of their space."
        },
        {
          ques: "4. Can Yellow Wood accommodate specific design styles or preferences?",
          ans: "Yes, we pride ourselves on our ability to tailor our interior designing services to accommodate a variety of design styles, from modern and contemporary to traditional and eclectic. Whether you prefer sleek minimalism, classic elegance, or rustic charm, our designers can create interiors that reflect your unique tastes and preferences."
        },
        {
          ques: "5. How involved will I be in the interior designing process?",
          ans: "We encourage active client participation and collaboration throughout the interior designing process. Your input and feedback are essential in shaping the final design, and we strive to incorporate your ideas and preferences into every aspect of the project. From concept development to final implementation, we ensure that the design reflects your vision and meets your expectations."
        }
      ]
    },
    {
      id: 5,
      page_title: "Vaastu Consultation",
      slug: "vaastu-consultation",
      featured_image: "/images/services/planing.jpg",
      title: "We offer the best Vaastu Consultation service",
      subtitle: "About Vaastu Consultation Service in Yellow Wood Design & Constructions",
      service_description: "<p>Vaastu Shastra is an ancient Indian architectural science that emphasizes the harmonious balance of energy within a space. At Yellow Wood Design & Construction, our Vaastu consultation services offer personalized guidance and remedies to align your environment with the natural forces and promote wellbeing and prosperity.</p> <p>Our knowledgeable consultants analyze your space according to Vaastu principles, identifying areas of imbalance and recommending practical solutions to optimize energy flow and create a harmonious living or working environment. Whether you're building a new home, renovating an existing space, or seeking to improve the energy dynamics of your environment, our Vaastu experts provide tailored guidance and support to help you achieve your goals.</p>",
      faqs: [
        {
          ques: "1. What is Vaastu consultation, and how does it relate to construction and design?",
          ans: " Vaastu consultation involves applying ancient Indian architectural principles to optimize the energy flow within a space. It considers factors such as orientation, layout, and placement of elements to create harmony and balance, which can positively influence the wellbeing and prosperity of occupants."
        },
        {
          ques: "2. Why should I consider Vaastu consultation for my construction project?",
          ans: "Vaastu consultation offers a holistic approach to design and construction, focusing on creating environments that promote harmony and balance. By aligning your space with Vaastu principles, you can enhance the flow of positive energy, improve the quality of life, and attract abundance and prosperity.."
        },
        {
          ques: "3. How does Yellow Wood Design & Construction incorporate Vaastu principles into its services?",
          ans: "At Yellow Wood, we offer Vaastu consultation services to clients who wish to integrate these principles into their construction projects. Our knowledgeable consultants analyze your space according to Vaastu guidelines, identify areas of imbalance, and provide personalized recommendations and remedies to optimize energy flow and create a harmonious environment."
        },
        {
          ques: "4. Can Vaastu consultation be integrated into existing structures or renovations?",
          ans: "Yes, Vaastu consultation can be applied to both new construction projects and existing structures. Whether you're building a new home, renovating an existing space, or seeking to improve the energy dynamics of your environment, our Vaastu experts offer tailored guidance and support to help you achieve your goals."
        },
        {
          ques: "5. What benefits can I expect from implementing Vaastu principles in my space?",
          ans: "By incorporating Vaastu principles into your space, you can experience a range of benefits, including improved health and wellbeing, enhanced prosperity and abundance, increased harmony and balance, and a greater sense of peace and tranquility. Vaastu consultation offers a holistic approach to design and construction, focusing on creating environments that support and nourish the occupants' physical, emotional, and spiritual needs."
        }
      ]
    },
    {
      id: 6,
      page_title: "Structural Designing",
      slug: "structural-designing",
      featured_image: "/images/services/planing.jpg",
      title: "We offer the best Structural Designing service",
      subtitle: "About Structural Designing Service in Yellow Wood Design & Constructions",
      service_description: "<p>Structural design is the process of ensuring the stability, strength, and safety of a building's framework. At Yellow Wood Design & Construction, our structural designing services are led by experienced engineers who employ advanced techniques and software to analyze, design, and optimize the structural elements of your project.</p> <p>From foundation design to load calculations, seismic considerations, and material selection, we prioritize durability and efficiency to deliver solutions that meet the highest standards of safety and performance. Whether you're building a residential home, commercial complex, or industrial facility, our team works closely with you to develop structural solutions that withstand the test of time and provide peace of mind.</p>",
      faqs: [
        {
          ques: "1. What is structural designing, and why is it important in construction projects?",
          ans: "Structural designing involves the analysis, design, and optimization of a building's structural framework to ensure stability, strength, and safety. It is essential for ensuring that buildings can withstand various loads and environmental conditions while maintaining structural integrity."
        },
        {
          ques: "2. How does Yellow Wood Design & Construction approach structural designing projects?",
          ans: "At Yellow Wood, our approach to structural designing is rooted in expertise, innovation, and attention to detail. Our team of qualified engineers utilizes advanced techniques and software to analyze structural loads, design components, and optimize structural systems to meet project requirements."
        },
        {
          ques: "3. What factors are considered during the structural designing process?",
          ans: "During the structural designing process, we consider factors such as building codes and regulations, site conditions, environmental loads, material properties, and architectural requirements. Our goal is to develop structural solutions that are efficient, durable, and cost-effective while meeting safety and performance standards."
        },
        {
          ques: "4. Can Yellow Wood provide structural designing services for different types of projects?",
          ans: "Yes, we offer structural designing services for a wide range of projects, including residential homes, commercial buildings, industrial facilities, and infrastructure projects. Whether you're constructing a new building, renovating an existing structure, or adding an extension, our team can provide tailored structural solutions to meet your needs."
        },
        {
          ques: "5. How does structural designing contribute to the overall success of a construction project?",
          ans: "Structural designing is critical to the overall success of a construction project as it ensures the structural integrity and safety of the building. By developing efficient and optimized structural systems, we help minimize construction costs, reduce material waste, and ensure long-term durability and performance, resulting in successful outcomes for our clients."
        }
      ]
    },
    {
      id: 7,
      page_title: "Waterproofing",
      slug: "waterproofing",
      featured_image: "/images/services/planing.jpg",
      title: "We offer the best Waterproofing service",
      subtitle: "About Waterproofing Service in Yellow Wood Design & Constructions",
      service_description: "<p> Waterproofing is essential for protecting your building against moisture infiltration, leaks, and water damage. At Yellow Wood Design & Construction, our waterproofing services utilize industry-leading products and techniques to safeguard your structure from the harmful effects of water.</p> <p>Whether it's a basement, roof, exterior facade, or below-grade space, we offer tailored waterproofing solutions to mitigate risks and ensure long-term durability and performance. Our skilled technicians conduct thorough assessments, identify areas of vulnerability, and recommend appropriate waterproofing systems to protect your investment and preserve the integrity of your building.</p>",
      faqs: [
        {
          ques: "1. What is waterproofing, and why is it important for construction projects?",
          ans: "Waterproofing is the process of applying materials or coatings to prevent water infiltration into building structures. It is essential for protecting buildings from moisture damage, mold growth, and structural deterioration caused by water penetration."
        },
        {
          ques: "2. How does Yellow Wood Design & Construction approach waterproofing projects?",
          ans: "At Yellow Wood, we prioritize the use of industry-leading waterproofing materials and techniques to provide durable and effective solutions for our clients. Our experienced technicians conduct thorough assessments to identify areas of vulnerability and recommend appropriate waterproofing systems tailored to each project's needs."
        },
        {
          ques: "3. What areas of a building can benefit from waterproofing services?",
          ans: "Waterproofing services can be applied to various areas of a building, including basements, foundations, roofs, exterior walls, and below-grade spaces. By addressing potential sources of water infiltration, we help mitigate risks and ensure the long-term integrity and performance of the structure."
        },
        {
          ques: "4. What are the common signs that a building may need waterproofing?",
          ans: "Common signs that a building may require waterproofing include water stains, dampness, mold growth, musty odors, and visible cracks or leaks. If you notice any of these signs, it's essential to address them promptly to prevent further damage and maintain the structural integrity of the building."
        },
        {
          ques: "5. How long does waterproofing last, and is maintenance required?",
          ans: "The longevity of waterproofing depends on various factors, including the quality of materials used, the effectiveness of the installation, and environmental conditions. While waterproofing systems are designed to provide long-term protection, periodic maintenance and inspections are recommended to ensure continued performance and identify any potential issues early."
        }
      ]
    },
    {
      id: 8,
      page_title: "Material Provider",
      slug: "material-provider",
      featured_image: "/images/services/planing.jpg",
      title: "We offer the best material provider service",
      subtitle: "About Material Provider Service in Yellow Wood Design & Constructions",
      service_description: "<p>Access premium construction materials and finishes through our extensive network of trusted suppliers. At Yellow Wood Design & Construction, we offer a curated selection of materials that combine aesthetics, functionality, and durability to meet your project requirements.</p> <p>From sustainable wood and eco-friendly paints to high-quality fixtures and fittings, we source the right materials for your project, ensuring superior results and lasting satisfaction. With our commitment to quality and sustainability, you can trust us to deliver the materials you need to bring your vision to life with confidence and peace of mind.</p>",
      faqs: [
        {
          ques: "1. What does Yellow Wood Design & Construction offer as a material provider?",
          ans: "As a material provider, Yellow Wood Design & Construction offers a curated selection of premium construction materials and finishes sourced from trusted suppliers. Our goal is to provide clients with access to high-quality materials that meet their aesthetic, functional, and sustainability needs."
        },
        {
          ques: "2. What types of materials are available through Yellow Wood?",
          ans: "We offer a diverse range of construction materials, including sustainable wood products, eco-friendly paints and coatings, durable fixtures and fittings, energy-efficient appliances, and innovative building technologies. Our selection is carefully curated to meet the demands of various construction projects, from residential homes to commercial buildings."
        },
        {
          ques: "3. How does Yellow Wood ensure the quality of its materials?",
          ans: "We partner with reputable suppliers and manufacturers known for their commitment to quality, reliability, and sustainability. Our team conducts thorough assessments and quality checks to ensure that all materials meet industry standards and our clients' expectations."
        },
        {
          ques: "4. Can clients request specific materials or brands through Yellow Wood?",
          ans: "Yes, we welcome client input and preferences when selecting materials for their projects. If you have specific material requirements or brand preferences, our team will work with you to source the products that best meet your needs and specifications."
        },
        {
          ques: "5. How does Yellow Wood handle material procurement and delivery?",
          ans: "Once materials are selected, our team coordinates with suppliers to procure the products and arrange for delivery to the project site. We ensure that materials are delivered on time and in good condition, allowing construction to proceed smoothly and efficiently."
        }
      ]
    }
  ];

  // const filePath = path.join(process.cwd(), 'public', 'services.json');
  // const fileContents = fs.readFileSync(filePath, 'utf8');
  // const items = JSON.parse(fileContents);

  const service = serviceData.find(item => item.slug === slug);

  if (!service) {
    res.status(404).json({ message: 'Service not found' });
    return;
  }

  res.status(200).json(service);
}
