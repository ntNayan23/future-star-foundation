import mbbs from "../../assets/mbbs.webp";
import bams from "../../assets/bams.webp";
import mba from "../../assets/mba.webp";
import btech from "../../assets/btech.webp";
import bpt from "../../assets/bpt.webp";
import bsc from "../../assets/bsc.webp";

import {
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineBookOpen,
  HiOutlineHeart,
} from "react-icons/hi";

export const courses = [
  {
    title: "MBBS",
    description:
      "Secure admissions in top government and private medical colleges across India and overseas.",
    image: mbbs,
    badge: "Most Popular",
    icon: HiOutlineHeart,
  },
  {
    title: "BAMS",
    description:
      "Comprehensive guidance for Ayurvedic Medicine and Surgery degrees in premier institutions.",
    image: bams,
    badge: "High Demand",
    icon: HiOutlineAcademicCap,
  },
  {
    title: "MBA",
    description:
      "Strategic admission planning for IIMs and elite global business schools for future leaders.",
    image: mba,
    badge: "Top Career Choice",
    icon: HiOutlineBriefcase,
  },
  {
    title: "B.Tech",
    description:
      "Expert counselling for JEE Main/Advanced and direct admissions in renowned tech universities.",
    image: btech,
    badge: "Engineering",
    icon: HiOutlineBookOpen,
  },
  {
    title: "BPT",
    description:
      "Specialized Physiotherapy programs with a focus on clinical excellence and practical training.",
    image: bpt,
    badge: "Healthcare",
    icon: HiOutlineHeart,
  },
  {
    title: "B.Sc",
    description:
      "Explore specialized Bachelor of Science streams in research, nursing, and applied sciences.",
    image: bsc,
    badge: "Science",
    icon: HiOutlineAcademicCap,
  },
];