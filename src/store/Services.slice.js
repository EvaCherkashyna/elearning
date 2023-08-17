import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  services: [
    {
      color: "yellow",
      svgColor: "#fff",
      backgroundColor: "#DCCE90",
      occupation: "Instructional Design",
      description: "We provide full-service instructional design consulting. From standalone lessons to the series of courses, no job is too large or too small for us.",
    },
    {
      color: "yellow",
      svgColor: "#fff",
      backgroundColor: "#DCCE90",
      occupation: "Elearning Development",
      description: "The eLearning products we create feature deep learner engagement and ensure high knowledge transfer.",
    },
    {
      color: "yellow",
      svgColor: "#fff",
      backgroundColor: "#DCCE90",
      occupation: "Mobile Learning",
      description: "Let us help you take your learning process anywhere your business may take you. Any place, any time, any device.",
    },
    {
      color: "yellow",
      svgColor: "#fff",
      backgroundColor: "#DCCE90",
      occupation: "Instructor-led Training",
      description: "We are experts at developing a classroom curriculum that meets your business needs and exceeds even your highest expectations.",
    },
    {
      color: "green",
      svgColor: "#fff",
      backgroundColor: "#29B4AD",
      occupation: "Instructional Design",
      description: "We provide full-service instructional design consulting. From standalone lessons to the series of courses, no job is too large or too small for us.",
    },
    {
      color: "green",
      svgColor: "#fff",
      backgroundColor: "#29B4AD",
      occupation: "Elearning Development",
      description: "The eLearning products we create feature deep learner engagement and ensure high knowledge transfer.",
    },
    {
      color: "green",
      svgColor: "#fff",
      backgroundColor: "#29B4AD",
      occupation: "Mobile Learning",
      description: "Let us help you take your learning process anywhere your business may take you. Any place, any time, any device.",
    },
    {
      color: "green",
      svgColor: "#fff",
      backgroundColor: "#29B4AD",
      occupation: "Instructor-led Training",
      description: "We are experts at developing a classroom curriculum that meets your business needs and exceeds even your highest expectations.",
    },
    {
      color: "green_outline",
      svgColor: "#29B4AD",
      backgroundColor: "transparent",
      occupation: "Instructional Design",
      description: "We provide full-service instructional design consulting. From standalone lessons to the series of courses, no job is too large or too small for us.",
    },
    {
      color: "green_outline",
      svgColor: "#29B4AD",
      backgroundColor: "transparent",
      occupation: "Elearning Development",
      description: "The eLearning products we create feature deep learner engagement and ensure high knowledge transfer.",
    },
    {
      color: "green_outline",
      svgColor: "#29B4AD",
      backgroundColor: "transparent",
      occupation: "Mobile Learning",
      description: "Let us help you take your learning process anywhere your business may take you. Any place, any time, any device.",
    },
    {
      color: "green_outline",
      svgColor: "#29B4AD",
      backgroundColor: "transparent",
      occupation: "Instructor-led Training",
      description: "We are experts at developing a classroom curriculum that meets your business needs and exceeds even your highest expectations.",
    },
    {
      color: "gray_outline",
      svgColor: "#B5B7B6",
      backgroundColor: "transparent",
      occupation: "Instructional Design",
      description: "We provide full-service instructional design consulting. From standalone lessons to the series of courses, no job is too large or too small for us.",
    },
    {
      color: "gray_outline",
      svgColor: "#B5B7B6",
      backgroundColor: "transparent",
      occupation: "Elearning Development",
      description: "The eLearning products we create feature deep learner engagement and ensure high knowledge transfer.",
    },
    {
      color: "gray_outline",
      svgColor: "#B5B7B6",
      backgroundColor: "transparent",
      occupation: "Mobile Learning",
      description: "Let us help you take your learning process anywhere your business may take you. Any place, any time, any device.",
    },
    {
      color: "gray_outline",
      svgColor: "#B5B7B6",
      backgroundColor: "transparent",
      occupation: "Instructor-led Training",
      description: "We are experts at developing a classroom curriculum that meets your business needs and exceeds even your highest expectations.",
    },

  ],
  filter: "All",
  filteredServices: [],
  searchServices:[],
  servicesByType:[]
}


const ServiceSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {

  }
})


export default ServiceSlice.reducer