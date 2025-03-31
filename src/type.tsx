export interface Project {
    title: string;
    image: string;
    description: string;
    technologies: string[];
}

import project1 from './assets/project1.png';
import project2 from './assets/project2.jpg';
import project3 from './assets/project3.png';

export const PROJECTS = [
    {
        title: "Healthcare Website",
        image: project1,
        description:
            "A fully functional Healthcare website with features like buy medicine, reservation and user authentication.",
        technologies: ["HTML", "CSS", "React", "Node.js"],
    },
    {
        title: "Real-time Monitoring Parking System",
        image: project2,
        description:
            "An application for Parking monitoring, with features such as Use authorized RFID cards to enter/exit the parking area, Access the dashboard through a web browser, and automatically updates the database when vehicles enter or exit.",
        technologies: ["React", "ESP 32", "Arduino", "Mysql"],
    },
    {
        title: "Hand Sign Language",
        image: project3,
        description:
            "Machine Learning using a dataset in Python, leveraging TensorFlow, NumPy, and Hand Tracking. It involves capturing hand movement data using libraries like MediaPipe, preprocessing and normalizing data with NumPy, and training deep learning models such as CNN or LSTM with TensorFlow.",
        technologies: ["Python", "Tensorflow", "Numpy", "MediaPipe"],
    },
];


