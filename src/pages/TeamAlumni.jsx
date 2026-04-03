import { useState } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const batches = [
  {
    year: "2023–27",
    label: "Current Batch",
    members: [
      { name: "Mr. Saurabh Patel", role: "President", img: "/img/mbr2023_27/SaurabhP.jpeg" },
      { name: "Mr. Ankit Raj Singh", role: "Superintendent", img: "/img/mbr2023_27/AniketR.jpeg" },
      { name: "Ms. Payal Sisodiya", role: "Vice President", img: "/img/mbr2023_27/PayalS.jpeg" },
      { name: "Mr. Deependra Mahobiya", role: "Secretary", img: "/img/mbr2023_27/DeependraM.jpeg" },
      { name: "Ms. Naina Bharti", role: "Secretary", img: "/img/mbr2023_27/Naina.jpeg" },
      { name: "Mr. Devesh Pandey", role: "Secretary", img: "/img/mbr2023_27/DeveshP.jpeg" },
      { name: "Mr. Nihal Jain", role: "Treasurer", img: "/img/mbr2023_27/NihalJ.jpeg" },
      { name: "Ms. Mahima Parte", role: "Media Head", img: null },
      { name: "Mr. Harshit Soni", role: "Media Head", img: "/img/mbr2023_27/HarshitS.jpeg" },
      { name: "Ms. Jaishree Shukla", role: "Teaching Head", img: null },
      { name: "Ms. Pranjal Singh", role: "Teaching Head", img: '/img/mbr2023_27/Pranjal.jpeg' },
      { name: "Mr. Piyush Dwivedi", role: "Teaching Head", img: "/img/mbr2023_27/PiyushD.webp" },
      { name: "Mr. Asad Qureshi", role: "Technical Head", img: null },
      { name: "Mr. Karan Sahu", role: "Technical Head", img: "/img/mbr2023_27/KaranSahu.jpg" },
      { name: "Mr. Arpit Selotkar", role: "Orphanage Head", img: "/img/mbr2023_27/ArpitS.jpeg" },
      { name: "Ms. Khushbhu Patel", role: "Orphanage Head", img: "/img/mbr2023_27/KhusbooP.jpeg" },
      { name: "Mr. Kapil Patidar", role: "Orphanage Head", img: "/img/mbr2023_27/KapilP.png" },
      { name: "Mr. Arjun Kurmi", role: "Event Manager", img: null },
      { name: "Mr. Yash Bhadoriya", role: "Event Manager", img: "/img/mbr2023_27/YashB.jpeg" },
      { name: "Ms. Kohima Dharne", role: "Event Manager", img: null },
      { name: "Mr. Ganesh Dhakad", role: "Exam Co-ordinator", img: null },
      { name: "Mr. Raja Shaw", role: "Exam Co-ordinator", img: "/img/mbr2023_27/RajaS.jpeg" },
      { name: "Mr. Kashish Sonker", role: "Exam Co-ordinator", img: "/img/mbr2023_27/KashishS.jpeg" },
      { name: "Mr. Priyesh Rajak", role: "Core-Team Member", img: "/img/mbr2023_27/PriyeshR.jpeg" },
      { name: "Mr. Pushpendra Tomar", role: "Core-Team Member", img: null },
      { name: "Mr. Uday Jain", role: "Core-Team Member", img: null },
      { name: "Mr. Chetan Amne", role: "Core-Team Member", img: "/img/mbr2023_27/ChetanA.jpeg" },
    ],
  },
  {
    year: "2022–26",
    label: "Current Batch",
    members: [
      { name: "Mr. Aniket Kumar Gupta", role: "President", img: '/img/mbr2022_26/AniketKG.png' },
      { name: "Mr. Gajendra Singh", role: "Superintendent", img: '/img/mbr2022_26/GajendraT.jpg' },
      { name: "Ms. Savitri Patel", role: "Vice President", img: '/img/mbr2022_26/SavitriI.jpg' },
      { name: "Mr. Dipansh Gupta", role: "Secretary", img: null },
      { name: "Ms. Aanchal Deode", role: "Secretary", img: '/img/mbr2022_26/AnchalD.jpg' },
      { name: "Ms. Shriyanshi Patel", role: "Secretary", img: null },
      { name: "Mr. Aryan Gaur", role: "Treasurer", img: '/img/mbr2022_26/AryanG.jpeg' },
      { name: "Ms. Prachi Pandey", role: "Media Head", img: null },
      { name: "Mr. Yatendra Pachori", role: "Media Head", img: null },
      { name: "Mr. Anshul Payasi", role: "Media Head", img: null },
      { name: "Ms. Shratika Agarwal", role: "Teaching Head", img: '/img/mbr2022_26/Shratika.jpeg' },
      { name: "Ms. Somya Raghuwanshi", role: "Teaching Head", img: null },
      { name: "Mr. Chinmay Prakash Jha", role: "Teaching Head", img: null },
      { name: "Ms. Devanshi Jain", role: "Technical Head", img: '/img/mbr2022_26/DvnshiJ.jpeg' },
      { name: "Ms. Yashashvi Sharma", role: "Technical Head", img: '/img/mbr2022_26/YashasviS.jpeg'},
      { name: "Mr. Atharv Tiwari", role: "Orphanage Head", img: '/img/mbr2022_26/AtharvT.jpg' },
      { name: "Ms. Aayushi Patidar", role: "Orphanage Head", img: null },
      { name: "Mr. Aman Sahu", role: "Orphanage Head", img: null },
      { name: "Mr. Anurag Soni", role: "Event Manager", img: "/img/mbr2022_26/AnuragS.PNG" },
      { name: "Mr. Ranvijay Kumar Upadhyay", role: "Event Manager", img: '/img/mbr2022_26/RanvijayU.png' },
      { name: "Mr. Pranav Kumar Gupta", role: "Event Manager", img:'/img/mbr2022_26/PranavG.jpeg' },
      { name: "Mr. Sameer Mahobiya", role: "Exam Co-ordinator", img: '/img/mbr2022_26/SameerM.jpeg' },
      { name: "Mr. Atharv Pant", role: "Exam Co-ordinator", img: null },
      { name: "Mr. Darshan Verma", role: "Exam Co-ordinator", img: null },
    ],
  },
  {
    year: "2021–25",
    label: "Alumni",
    members: [
      { name: "Mr. Arpit Yadav", role: "President", img: "/img/mbr2025/img 23.png - Arpit Yadav.jpg" },
      { name: "Mr. Meghraj Jain", role: "Superintendent", img: "/img/mbr2025/IMG-20240701-WA0026 - Meghraj jain.jpg" },
      { name: "Ms. Kishita Patel", role: "Vice President", img: "/img/mbr2025/IMG_1760 - 43_kishitapatel Patel.jpeg" },
      { name: "Mr. Atharv Vibhute", role: "Secretary", img: "/img/mbr2025/t1 - Atharv Vibhute.jpg" },
      { name: "Ms. Piyali Saha", role: "Secretary", img: "/img/mbr2025/20250311140833550 - Piyali Saha.jpeg" },
      { name: "Mr. Nikhil Tiwari", role: "Secretary", img: "/img/mbr2025/IMG_20250311_162424 - Nikhil Tiwari.jpg" },
      { name: "Mr. Gaurav Soni", role: "Treasurer", img: "/img/mbr2025/IMG_20250311_164645 - gaurav kumar.jpg" },
      { name: "Ms. Divita Saikia", role: "Media Head", img: "/img/mbr2025/IMG_20250316_123216 - Divita Saikia.jpg" },
      { name: "Mr. Ankit Sadiwal", role: "Media Head", img: "/img/mbr2025/PXL_20240416_022959757 - 21_EC_Ankit Sadiwal.jpg" },
      { name: "Mr. Jai Nirkhe", role: "Teaching Head", img: "/img/mbr2025/WhatsApp Image 2025-02-20 at 12.30.29_5fdb9da1 - Jai Nirkhe.jpg" },
      { name: "Mr. Prince Sahu", role: "Teaching Head", img: "/img/mbr2025/Screenshot_2024-10-24-21-16-29-83_99c04817c0de5652397fc8b56c3b3817 - PRINCE.jpg" },
      { name: "Mr. Mrigank Raj Dubey", role: "Technical Head", img: "/img/mbr2025/IMG_20250223_010750_734 - Mrigank Raj Dubey.webp" },
      { name: "Mr. Anirudh Jain", role: "Orphanage Head", img: "/img/mbr2025/IMG_20240322_190029_368 - Anirudh Jain.jpg" },
      { name: "Ms. Kashish Meghani", role: "Orphanage Head", img: "/img/mbr2025/1741691989959 - Kashish Meghani_.jpg" },
      { name: "Mr. Prajwal Nikhade", role: "Event Manager", img: "/img/mbr2025/IMG_20250311_190804 - Prajwal Nikhade.jpg" },
      { name: "Mr. Deepak Prajapati", role: "Exam Co-ordinator", img: "/img/mbr2025/imresizer-1740071311271 - Deepak Prajapati.jpg" },
    ],
  },
  {
    year: "2020–24",
    label: "Alumni",
    members: [
      { name: "Mr. Amar Singh Garg", role: "President", img: "/img/mbr2024/IMG-20250217-WA0041 - Aniket Kumar Gupta.jpg" },
      { name: "Mr. Akshat Rahangdale", role: "Superintendent", img: "/img/mbr2024/Screenshot 2025-07-26 114924.png" },
      { name: "Ms. Richa Gupta", role: "Vice President", img: null },
      { name: "Mr. Harshwardhan Thakur", role: "Secretary", img: "/img/mbr2024/DSC04264 - Harshwardhan Thakur.JPG" },
      { name: "Mr. Aditya Tripathi", role: "Treasurer", img: null },
      { name: "Ms. Shishti Chaubey", role: "Media Head", img: null },
      { name: "Ms. Shreya Gupta", role: "Media Head", img: null },
      { name: "Mr. Rishabh Porwal", role: "Media Head", img: null },
      { name: "Mr. Aman Kumar", role: "Technical Head", img: "/img/mbr2024/IMG_20250217_084346 - Aman KUMAR.jpg" },
      { name: "Mr. Kumar Vaibhav", role: "Technical Head", img: null },
      { name: "Mr. Aman Devaliya", role: "Technical Head", img: "/img/mbr2024/IMG-20250112-WA0003 - Aman Devaliya.jpg" },
      { name: "Mr. Anubhav Verma", role: "Teaching Head", img: null },
      { name: "Ms. Poornima Bhumarkar", role: "Teaching Head", img: "/img/mbr2024/IMG_20250311_215352 - Poornima Bhumarkar.jpg" },
      { name: "Mr. Naveen Prajapati", role: "Teaching Head", img: null },
      { name: "Ms. Angel Tirkey", role: "Orphanage Head", img: null },
      { name: "Ms. Astha", role: "Orphanage Head", img: null },
      { name: "Mr. Gaurav Kumar", role: "Orphanage Head", img: "/img/mbr2024/IMG-20240101-WA0048 - Gaurav Kumar.jpg" },
      { name: "Mr. Sandeep Sharma", role: "Orphanage Head", img: null },
      { name: "Mr. Abhishek Shukla", role: "Exam Co-ordinator", img: null },
      { name: "Mr. Ankit Pandey", role: "Exam Co-ordinator", img: null },
      { name: "Mr. Dipanshu Mishra", role: "Exam Co-ordinator", img: null },
      { name: "Mr. Abhishek Shukla", role: "Event Manager", img: null },
      { name: "Ms. Urvija Jha", role: "Event Manager", img: null },
      { name: "Ms. Ayushi Sonwane", role: "Event Manager", img: null },
      { name: "Mr. Prashant Pandey", role: "Event Manager", img: null },
      { name: "Mr. Vishnu Mishra", role: "Core Member", img: "/img/mbr2024/SAVE_20250312_085558 - VISHNU MISHRA.jpg" },
      { name: "Mr. Vaibhav Rajawat", role: "Core Member", img: null },
      { name: "Ms. Muskan Yadav", role: "Core Member", img: "/img/mbr2024/IMG_20250314_153318 - Muskan Yadav.jpg" },
    ],
  },
  {
    year: "2019–23",
    label: "Alumni",
    members: [
      { name: "Mr. Shivam Birla", role: "President", img: "/img/mbr2023/sbsir.jpg" },
      { name: "Mr. Tanmay Chourey", role: "Superintendent", img: "/img/mbr2023/tncsir.jpg" },
      { name: "Ms. Palak Mishra", role: "Vice President", img: "/img/mbr2023/plkmam.jpg" },
      { name: "Ms. Tejanshi Daushlya", role: "Secretary", img: "/img/mbr2023/tjdmam.jpeg" },
      { name: "Mr. Adarsh Dwivedi", role: "Treasurer", img: "/img/mbr2023/adwsir.jpg" },
    ],
  },
  {
    year: "2018–22",
    label: "Alumni",
    members: [
      { name: "Mr. Sanjeev Kumar", role: "President", img: "/img/mbr2022/sanjeevimg.jpg" },
      { name: "Ms. Shivani Karyam", role: "Vice President", img: "/img/mbr2022/shivi.png" },
      { name: "Mr. Bhoopendra Singh", role: "Secretary", img: "/img/mbr2022/bhoop.png" },
      { name: "Ms. Divyanshi Jain", role: "Secretary", img: "/img/mbr2022/divyu.png" },
      { name: "Mr. Shubham Rimjha", role: "Media Head", img: "/img/mbr2022/rimjh.jpg" },
      { name: "Mr. Ankit Yadav", role: "Treasurer", img: "/img/mbr2022/ankit.jpg" },
    ],
  },
  {
    year: "2017–21",
    label: "Alumni",
    members: [
      { name: "Mr. Yogendra Singh Rathor", role: "President", img: "/img/mbr2021/ysrsir.jpg" },
      { name: "Mr. Keshav Parihar", role: "Treasurer", img: "/img/mbr2021/ksvsir.jpg" },
    ],
  },
  {
    year: "2016–20",
    label: "Alumni",
    members: [
      { name: "Mr. Rahul Patidar", role: "President", img: "/img/images_files/image088.png" },
      { name: "Ms. Ekta Barpete", role: "Vice President", img: "/img/images_files/image098.png" },
      { name: "Mr. Himanshu Shankhla", role: "Member", img: null },
      { name: "Mr. Nishant Nagwanshi", role: "Member", img: "/img/images_files/image090.png" },
      { name: "Mr. Chanchal Singh Thakur", role: "Member", img: "/img/images_files/image092.png" },
      { name: "Mr. Rishi Mishra", role: "Member", img: null },
      { name: "Mr. Shubham Mishra", role: "Member", img: "/img/images_files/image094.png" },
      { name: "Mr. Navneet", role: "Member", img: null },
      { name: "Mr. Neetiraj Malviya", role: "Member", img: null },
      { name: "Ms. Pooja Soni", role: "Member", img: "/img/images_files/image099.png" },
      { name: "Ms. Sangeeta Paraste", role: "Member", img: "/img/images_files/image101.png" },
      { name: "Ms. Aarti Dhurve", role: "Member", img: "/img/images_files/image103.png" },
      { name: "Ms. Usha Suryawanshi", role: "Member", img: null },
      { name: "Ms. Swati Soni", role: "Member", img: null },
      { name: "Ms. Anshul Tripathi", role: "Member", img: null },
      { name: "Ms. Shruti Singour", role: "Member", img: "/img/images_files/image111.png" },
      { name: "Mr. Ankit Athnere", role: "Member", img: null },
      { name: "Ms. Sonam", role: "Member", img: null },
      { name: "Ms. Aradhna Mishra", role: "Member", img: null },
      { name: "Mr. Shailendra Namdev", role: "Member", img: null },
      { name: "Ms. Manisha Patel", role: "Member", img: null },
      { name: "Mr. Deepak Patidar", role: "Member", img: null },
      { name: "Mr. Sonu Bariya", role: "Member", img: null },
      { name: "Mr. Ashutosh Dubey", role: "Member", img: null },
      { name: "Mr. Saket Khare", role: "Member", img: null },
      { name: "Mr. Aaryan Yadav", role: "Member", img: null },
      { name: "Ms. Damini Rajak", role: "Member", img: null },
      { name: "Mr. Himanshu Gupta", role: "Member", img: null },
    ],
  },
  {
    year: "2015–19",
    label: "Alumni",
    members: [
      { name: "Mr. Neeraj Patidar", role: "President", img: "/img/images_files/image068.png" },
      { name: "Ms. Rajni Pendro", role: "Member", img: "/img/images_files/image070.png" },
      { name: "Ms. Shubhangi Singh", role: "Member", img: null },
      { name: "Ms. Jagriti Mourya", role: "Member", img: null },
      { name: "Ms. Ritika Watte", role: "Member", img: "/img/images_files/image076.png" },
      { name: "Ms. Ayushi Khatik", role: "Member", img: "/img/images_files/image077.png" },
      { name: "Ms. Yukta Pandey", role: "Member", img: "/img/images_files/image078.png" },
      { name: "Mr. Shanu Singh", role: "Member", img: null },
      { name: "Ms. Smriti Chaurasia", role: "Member", img: null },
      { name: "Mr. Sankalp Garg", role: "Member", img: "/img/images_files/image081.png" },
      { name: "Mr. Saurabh Singh Rajpoot", role: "Member", img: null },
      { name: "Mr. Sudeep Kumar", role: "Member", img: null },
      { name: "Mr. Ashutosh Mishra", role: "Treasurer", img: "/img/images_files/image084.png" },
      { name: "Mr. Tohit Khan", role: "Member", img: "/img/images_files/image085.png" },
      { name: "Mr. Abhishek Agrawal", role: "Member", img: null },
      { name: "Ms. Shweta Machiwar", role: "Member", img: null },
    ],
  },
  {
    year: "2014–18",
    label: "Alumni",
    members: [
      { name: "Mr. Shikhar Barve", role: "President", img: "/img/images_files/image061.png" },
      { name: "Ms. Ayushi Jain", role: "Member", img: "/img/images_files/image059.png" },
      { name: "Ms. Pragya Agrawal", role: "Member", img: null },
      { name: "Mr. Shivani Mishra", role: "Member", img: null },
      { name: "Mr. Umesh Patidar", role: "Member", img: "/img/images_files/image062.png" },
      { name: "Mr. Sharad Kant Nagaich", role: "Member", img: "/img/images_files/image063.png" },
      { name: "Mr. Karan Kumar Prajapati", role: "Member", img: null },
    ],
  },
  {
    year: "2013–17",
    label: "Alumni",
    members: [
      { name: "Mr. Anoop Sharma", role: "President", img: null },
      { name: "Mr. Ashish Bharadwaj", role: "Vice President", img: "/img/images_files/image047.png" },
      { name: "Mr. Shubham Jain", role: "Member", img: null },
      { name: "Mr. Tajasvi Saxena", role: "Member", img: "/img/images_files/image042.png" },
      { name: "Mr. Anand Arole", role: "Member", img: null },
      { name: "Mr. Amit Yadav", role: "Member", img: "/img/images_files/image045.png" },
      { name: "Mr. Divyansh Jain", role: "Member", img: null },
      { name: "Mr. Saurabh Jain", role: "Member", img: "/img/images_files/image049.png" },
      { name: "Ms. Anchal Tiwari", role: "Member", img: "/img/images_files/image051.png" },
      { name: "Ms. Divya Paroha", role: "Member", img: null },
      { name: "Ms. Shweta Markam", role: "Member", img: "/img/images_files/image054.png" },
      { name: "Ms. Shweta Singh", role: "Member", img: null },
      { name: "Ms. Tripti Ratre", role: "Member", img: "/img/images_files/image056.png" },
      { name: "Ms. Shubhangi Soni", role: "Member", img: null },
    ],
  },
  {
    year: "2012–16",
    label: "Alumni",
    members: [
      { name: "Mr. Sandeep Mehta", role: "Member", img: "/img/images_files/image023.png" },
      { name: "Ms. Sakshi Pandey", role: "Member", img: null },
      { name: "Ms. Varsha Manglani", role: "Member", img: null },
      { name: "Ms. Nimisha Prashant", role: "Member", img: null },
      { name: "Ms. Kinjal Jain", role: "Member", img: "/img/images_files/image027.png" },
      { name: "Ms. Paridhi Giriya", role: "Member", img: null },
      { name: "Mr. Satya Prakash Bisariya", role: "Member", img: "/img/images_files/image030.png" },
      { name: "Mr. Rishab Khampariya", role: "Member", img: "/img/images_files/image031.png" },
      { name: "Mr. Yogendra Prajapati", role: "Member", img: null },
      { name: "Mr. Mayank Nema", role: "Member", img: "/img/images_files/image035.png" },
      { name: "Mr. Vikrant Pandey", role: "Member", img: "/img/images_files/image036.png" },
      { name: "Mr. Rahul Jha", role: "Member", img: "/img/images_files/image034.png" },
      { name: "Ms. Sampda Saraf", role: "Member", img: "/img/images_files/image039.png" },
    ],
  },
  {
    year: "2011–15",
    label: "Alumni",
    members: [
      { name: "Mr. Saurav Kumar Dev", role: "Member", img: "/img/images_files/image007.png" },
      { name: "Mr. Gaurav Patil", role: "Member", img: "/img/images_files/image005.png" },
      { name: "Mr. Jitendra Kumar Tamiya", role: "Member", img: "/img/images_files/image009.png" },
      { name: "Mr. Devendra Markam", role: "Member", img: null },
      { name: "Mr. Himanshu Zharbade", role: "Member", img: null },
      { name: "Mr. Surendra Emne", role: "Member", img: "/img/images_files/Surendra Emne.png" },
      { name: "Mr. Rajkumar Marskole", role: "Member", img: null },
      { name: "Mr. Avinash Gupta", role: "Member", img: "/img/images_files/image017.png" },
      { name: "Mr. Kamal Nath Dhurve", role: "Member", img: "/img/images_files/image019.png" },
      { name: "Mr. Anurag Mishra", role: "Member", img: null },
    ],
  },
];

// Unified, professional color scaling based on leadership tiers
function getRoleTheme(role) {
  const executives = ["President", "Vice President", "Vice-President", "Superintendent", "Secretary", "Treasurer"];
  const heads = ["Media Head", "Teaching Head", "Technical Head", "Orphanage Head", "Event Manager", "Exam Co-ordinator"];
  
  if (executives.includes(role)) {
    return { bg: "#EFF6FF", text: "#1E3A8A", border: "#BFDBFE" }; // Deep Blue for Executives
  }
  if (heads.includes(role)) {
    return { bg: "#ECFDF5", text: "#065F46", border: "#A7F3D0" }; // Emerald for Core Heads
  }
  // Default for Core Members / Members
  return { bg: "#F8FAFC", text: "#334155", border: "#E2E8F0" }; // Slate for Members
}

function isFemale(name) {
  return name.trim().startsWith("Ms.");
}

function AvatarFallback({ female }) {
  return (
    <svg width="80" height="80" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="28" cy="28" r="28" fill={female ? "#FCE7F3" : "#E0F2FE"} />
      <circle cx="28" cy="20" r="9" fill={female ? "#F472B6" : "#7DD3FC"} />
      {female ? (
        <>
          <path d="M19 18 Q19 9 28 9 Q37 9 37 18" fill="#DB2777" />
          <path d="M14 50 Q14 32 28 32 Q42 32 42 50" fill="#DB2777" />
        </>
      ) : (
        <>
          <path d="M10 50c0-9.94 8.06-18 18-18s18 8.06 18 18" fill="#0284C7" />
          <path d="M25 32 l3 5 l3-5" fill="#0369A1" />
        </>
      )}
    </svg>
  );
}

function MemberCard({ member }) {
  const [imgError, setImgError] = useState(false);
  const female = isFemale(member.name);
  const theme = getRoleTheme(member.role);
  const hasImage = member.img && !imgError;
  const cleanName = member.name.replace(/^(Mr\.|Ms\.|Mrs\.)\s*/i, "").trim();
  const prefix = member.name.match(/^(Mr\.|Ms\.|Mrs\.)/i)?.[0] || "";

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "16px",
        border: "1px solid #E2E8F0",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        cursor: "default",
        boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)";
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.borderColor = theme.border;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.05)";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "#E2E8F0";
      }}
    >
      {/* Aspect Ratio container ensures uniform size without chopping heads */}
      <div style={{
        width: "100%",
        aspectRatio: "1 / 1", 
        background: hasImage ? "#F8FAFC" : (female ? "#FDF2F8" : "#F0F9FF"),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        borderBottom: "1px solid #F1F5F9"
      }}>
        {hasImage ? (
          <img
            src={member.img}
            alt={member.name}
            onError={() => setImgError(true)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top center", // Keeps the face in view
              display: "block",
            }}
          />
        ) : (
          <AvatarFallback female={female} />
        )}
      </div>

      <div style={{ padding: "20px 16px", display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "space-between" }}>
        <div>
          <div style={{ fontSize: "12px", color: "#64748B", fontWeight: 500, marginBottom: "2px" }}>
            {prefix}
          </div>
          <div style={{ fontWeight: 700, fontSize: "17px", color: "#0F172A", lineHeight: 1.3 }}>
            {cleanName}
          </div>
        </div>

        <div style={{ marginTop: "16px" }}>
          <span style={{
            background: theme.bg,
            color: theme.text,
            border: `1px solid ${theme.border}`,
            fontSize: "12px",
            fontWeight: 600,
            padding: "4px 12px",
            borderRadius: "6px",
            display: "inline-block",
          }}>
            {member.role}
          </span>
        </div>
      </div>
    </div>
  );
}

function BatchSection({ batch, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);
  const isCurrentBatch = batch.label === "Current Batch";

  return (
    <div style={{ marginBottom: "24px" }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%",
          background: isCurrentBatch ? "#0F172A" : "#FFFFFF",
          border: isCurrentBatch ? "none" : "1px solid #E2E8F0",
          borderRadius: open ? "12px 12px 0 0" : "12px",
          padding: "18px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
          transition: "all 0.2s ease",
          boxShadow: isCurrentBatch ? "0 4px 6px -1px rgba(0,0,0,0.1)" : "none",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <span style={{
            fontWeight: 700,
            fontSize: "18px",
            color: isCurrentBatch ? "#FFFFFF" : "#0F172A",
          }}>
            Batch {batch.year}
          </span>
          {isCurrentBatch && (
            <span style={{
              background: "#3B82F6",
              color: "#FFFFFF",
              fontSize: "12px",
              fontWeight: 600,
              padding: "4px 12px",
              borderRadius: "20px",
              letterSpacing: "0.5px",
              textTransform: "uppercase"
            }}>
              Current
            </span>
          )}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontSize: "14px", fontWeight: 500, color: isCurrentBatch ? "#94A3B8" : "#64748B" }}>
            {batch.members.length} members
          </span>
          <span style={{
            color: isCurrentBatch ? "#FFFFFF" : "#64748B",
            transition: "transform 0.3s ease",
            transform: open ? "rotate(180deg)" : "none",
            display: "inline-block"
          }}>
            ▼
          </span>
        </div>
      </button>

      {open && (
        <div style={{
          border: "1px solid #E2E8F0",
          borderTop: "none",
          borderRadius: "0 0 12px 12px",
          padding: "32px",
          background: "#F8FAFC",
        }}>
          {/* Much larger grid layout for bigger cards */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "24px",
          }}>
            {batch.members.map((m, i) => (
              <MemberCard key={i} member={m} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function TeamAlumni() {
  const [search, setSearch] = useState("");
  const [filterRole, setFilterRole] = useState("All");

  const allRoles = [
    "All", "President", "Vice President", "Superintendent", "Secretary",
    "Treasurer", "Media Head", "Teaching Head", "Technical Head",
    "Orphanage Head", "Event Manager", "Exam Co-ordinator", "Core Member",
    "Core-Team Member", "Member",
  ];

  const filteredBatches = batches.map(b => ({
    ...b,
    members: b.members.filter(m => {
      const matchSearch =
        m.name.toLowerCase().includes(search.toLowerCase()) ||
        m.role.toLowerCase().includes(search.toLowerCase());
      const matchRole = filterRole === "All" || m.role === filterRole;
      return matchSearch && matchRole;
    }),
  })).filter(b => b.members.length > 0);

  const totalMembers = batches.reduce((acc, b) => acc + b.members.length, 0);

  return (
    <div>
      <div style={{ fontFamily: "Inter, system-ui, sans-serif", maxWidth: "1280px", margin: "0 auto", padding: "48px 24px" }}>
        
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <h1 style={{
            fontSize: "46px", 
            fontWeight: 800, 
            color: "#0F172A",
            margin: "0 0 16px", 
            letterSpacing: "-1px"
          }}>
            Our Team & Alumni
          </h1>
          <p style={{ color: "#64748B", fontSize: "18px", margin: "0 0 32px", maxWidth: "600px", marginInline: "auto" }}>
            Celebrating {totalMembers}+ members across {batches.length} batches of impact and leadership since 2011.
          </p>
          
          <div style={{ display: "flex", justifyContent: "center", gap: "24px", flexWrap: "wrap" }}>
            {[
              { label: "Batches", value: batches.length },
              { label: "Total Members", value: `${totalMembers}+` },
              { label: "Years Active", value: "15+" },
            ].map((s, i) => (
              <div key={i} style={{
                background: "#FFFFFF", 
                border: "1px solid #E2E8F0",
                boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                borderRadius: "16px", 
                padding: "16px 32px", 
                textAlign: "center",
                minWidth: "160px"
              }}>
                <div style={{ fontWeight: 800, fontSize: "32px", color: "#0F172A" }}>{s.value}</div>
                <div style={{ fontSize: "14px", color: "#64748B", fontWeight: 500, marginTop: "4px" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div style={{ 
          display: "flex", 
          gap: "16px", 
          marginBottom: "40px", 
          flexWrap: "wrap",
          background: "#FFFFFF",
          padding: "16px",
          borderRadius: "16px",
          border: "1px solid #E2E8F0",
          boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)"
        }}>
          <input
            type="text"
            placeholder="Search members by name or role..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              flex: "1 1 300px", 
              padding: "14px 20px",
              border: "1px solid #CBD5E1", 
              borderRadius: "8px",
              fontSize: "16px", 
              outline: "none", 
              background: "#F8FAFC",
              color: "#0F172A",
              transition: "border-color 0.2s"
            }}
            onFocus={(e) => e.target.style.borderColor = "#3B82F6"}
            onBlur={(e) => e.target.style.borderColor = "#CBD5E1"}
          />
          <select
            value={filterRole}
            onChange={e => setFilterRole(e.target.value)}
            style={{
              padding: "14px 20px", 
              border: "1px solid #CBD5E1",
              borderRadius: "8px", 
              fontSize: "16px", 
              background: "#F8FAFC",
              color: "#0F172A", 
              cursor: "pointer",
              minWidth: "200px",
              outline: "none"
            }}
          >
            {allRoles.map(r => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>

        {/* Batch Lists */}
        {filteredBatches.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 20px", color: "#64748B", fontSize: "18px", background: "#F8FAFC", borderRadius: "16px" }}>
            No members found matching your search criteria.
          </div>
        ) : (
          filteredBatches.map((batch, i) => (
            <BatchSection key={batch.year} batch={batch} defaultOpen={i === 0} />
          ))
        )}

        <div style={{
          textAlign: "center", 
          marginTop: "56px", 
          padding: "24px",
          background: "#F8FAFC", 
          borderRadius: "12px",
          border: "1px solid #E2E8F0",
        }}>
          <p style={{ color: "#475569", fontSize: "15px", margin: 0 }}>
            We apologize if your name is missing or information is incorrect. Please contact our web team at <strong>7440682926</strong>.
          </p>
        </div>
        
      </div>
      <Footer />
    </div>
  );
}