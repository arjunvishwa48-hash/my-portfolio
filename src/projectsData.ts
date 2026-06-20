/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import bharatanatyamPoster from "./assets/images/Bharatanatyam Poster.jpg";
import canonCameraPoster from "./assets/images/Canon Camera Poster.jpg";
import cmis1 from "./assets/images/CMIS -  (1).jpg";
import cmis2 from "./assets/images/CMIS -  (2).jpg";
import cmis3 from "./assets/images/CMIS -  (3).jpg";
import cmis4 from "./assets/images/CMIS -  (4).jpg";

export interface Project {
  id: number;
  title: string;
  client: string;
  category: string;
  span?: string;
  image: string;
  videoUrl?: string;
}

export const projects: Project[] = [
  // ── AI Video ────────────────────────────────────────────────────
  {
    id: 1,
    title: "AI Neural Morphing",
    client: "Synthetic Arts",
    category: "AI Video",
    span: "md:col-span-6",
    image: "https://drive.google.com/file/d/1esyevN6hT1i8tTZcYDIca3YSJoafFXoA/view?usp=drive_link",
    videoUrl: "https://drive.google.com/file/d/1HnaY2CRa-7A2bRPeyQDbqgRz2L81OtX1/view?usp=drive_link"
  },
  {
    id: 2,
    title: "AI Dreamscapes",
    client: "AI Collective",
    category: "AI Video",
    span: "md:col-span-6",
    image: "https://drive.google.com/file/d/1b4hZrjbYERSddIduo9Apir3FutlmACP0/view?usp=drive_link",
    videoUrl: "https://drive.google.com/file/d/16uRJ8DoOH-XM_G0MDqrAwNJfvFT_tp-f/view?usp=drive_link"
  },
  {
    id: 3,
    title: "AI Visual Synthesis",
    client: "Creative Labs",
    category: "AI Video",
    span: "md:col-span-6",
    image: "https://drive.google.com/file/d/1Ua9jkMtzH6bI1Wz8RmGjAW9jgrH8OrZ4/view?usp=drive_link",
    videoUrl: "https://drive.google.com/file/d/1s9QStkJSlIw8h0nf-VOeubODNeUdlc5_/view?usp=drive_link"
  },
  {
    id: 4,
    title: "AI Motion Studio",
    client: "Digital Arts",
    category: "AI Video",
    span: "md:col-span-6",
    image: "https://drive.google.com/file/d/1xmNCS6rPSK6gIDf8n2lQWeXgsg6EpRTR/view?usp=drive_link",
    videoUrl: "https://drive.google.com/file/d/1crsjNWP4wShqVQkoyCYjlRiqBHFck0z7/view?usp=drive_link"
  },
  {
    id: 5,
    title: "AI Generative Flow",
    client: "Future Vision",
    category: "AI Video",
    span: "md:col-span-6",
    image: "https://drive.google.com/file/d/1z-r9VWl3Pp0-V_Tr7Bpgt0JiJYF6I-5G/view?usp=drive_link",
    videoUrl: "https://drive.google.com/file/d/1adyp6FfSrc4O4BvDAtKJ1bnUEn8Of8I0/view?usp=drive_link"
  },

  // ── Video ────────────────────────────────────────────────────────
  {
    id: 6,
    title: "Moonlight Journey",
    client: "CMIS International",
    category: "Video",
    span: "md:col-span-6",
    image: "https://drive.google.com/file/d/1WKqgBSRFkODxcPy4QsDt38RKazIrZGor/view?usp=drive_link",
    videoUrl: "https://drive.google.com/file/d/1-F2BaUCmZOavHVi83ofSq30BRXCq48Gy/view?usp=drive_link"
  },
  {
    id: 7,
    title: "Shadow & Light",
    client: "Personal Work",
    category: "Video",
    span: "md:col-span-6",
    image: "https://drive.google.com/file/d/1CX6xXdqcQ2L7W2iNBYdwQDF_hmsVj1El/view?usp=drive_link",
    videoUrl: "https://drive.google.com/file/d/1sA7UVX3OAVFZf_AoHFj--mzHQ0sbhtjD/view?usp=drive_link"
  },
  {
    id: 8,
    title: "Neural Connection",
    client: "Creative Tech",
    category: "Video",
    span: "md:col-span-6",
    image: "https://drive.google.com/file/d/1jwBobUTADA6KMsGWhOpJQ7qiiWe33z-6/view?usp=drive_link",
    videoUrl: "https://drive.google.com/file/d/1yNixLhrbTGb-rkjDACN9kwZJO3SsQ71r/view?usp=drive_link"
  },
  {
    id: 9,
    title: "Urban Echoes",
    client: "City Life",
    category: "Video",
    span: "md:col-span-6",
    image: "https://drive.google.com/file/d/1isYenM43lRJTO6Z9oB7giUjd-7r15mNo/view?usp=drive_link",
    videoUrl: "https://drive.google.com/file/d/1V9D1k-eHICBy54aKnji7kCfxnXeM9A7j/view?usp=drive_link"
  },
  {
    id: 10,
    title: "Dynamic Motion",
    client: "Action Studios",
    category: "Video",
    span: "md:col-span-6",
    image: "https://drive.google.com/file/d/1LdzQb4w5_xXRd4B88ZB_ZesjtumG9GpE/view?usp=drive_link",
    videoUrl: "https://drive.google.com/file/d/1UTb4UyQTTTniQoAviQYudc1OtOaxjDOK/view?usp=drive_link"
  },
  {
    id: 11,
    title: "Showcase Feature V6",
    client: "Online Showcase",
    category: "Video",
    span: "md:col-span-6",
    image: "https://img.youtube.com/vi/dYbpzlTYyyA/maxresdefault.jpg",
    videoUrl: "https://youtu.be/dYbpzlTYyyA"
  },
  {
    id: 12,
    title: "Showcase Feature V7",
    client: "Online Showcase",
    category: "Video",
    span: "md:col-span-6",
    image: "https://img.youtube.com/vi/BiW2AnFwePQ/maxresdefault.jpg",
    videoUrl: "https://youtu.be/BiW2AnFwePQ"
  },
  // ── Graphic Design ───────────────────────────────────────────────
  {
    id: 13,
    title: "Bharatanatyam Poster",
    client: "Personal Work",
    category: "Graphic Design",
    span: "md:col-span-6",
    image: bharatanatyamPoster
  },
  {
    id: 14,
    title: "Canon Camera Poster",
    client: "Personal Work",
    category: "Graphic Design",
    span: "md:col-span-6",
    image: canonCameraPoster
  },
  {
    id: 15,
    title: "CMIS Campaign 1",
    client: "CMIS International",
    category: "Graphic Design",
    span: "md:col-span-6",
    image: cmis1
  },
  {
    id: 16,
    title: "CMIS Campaign 2",
    client: "CMIS International",
    category: "Graphic Design",
    span: "md:col-span-6",
    image: cmis2
  },
  {
    id: 17,
    title: "CMIS Campaign 3",
    client: "CMIS International",
    category: "Graphic Design",
    span: "md:col-span-6",
    image: cmis3
  },
  {
    id: 18,
    title: "CMIS Campaign 4",
    client: "CMIS International",
    category: "Graphic Design",
    span: "md:col-span-6",
    image: cmis4
  },
  // ── Reels ────────────────────────────────────────────────────────
  {
    id: 19,
    title: "Cinematic Short Cut",
    client: "Creative Edit",
    category: "Reel",
    span: "md:col-span-6",
    image: "https://img.youtube.com/vi/JBbKFnGdHcc/maxresdefault.jpg",
    videoUrl: "https://youtube.com/shorts/JBbKFnGdHcc?feature=share"
  },
  {
    id: 20,
    title: "Vertical Storytelling",
    client: "Brand Campaign",
    category: "Reel",
    span: "md:col-span-6",
    image: "https://img.youtube.com/vi/TOwPY2y2M8k/maxresdefault.jpg",
    videoUrl: "https://youtube.com/shorts/TOwPY2y2M8k?feature=share"
  },
  {
    id: 21,
    title: "Atmospheric Visuals",
    client: "Aesthetic Reel",
    category: "Reel",
    span: "md:col-span-6",
    image: "https://img.youtube.com/vi/bet6vtD-ouM/maxresdefault.jpg",
    videoUrl: "https://youtube.com/shorts/bet6vtD-ouM?feature=share"
  },
  {
    id: 22,
    title: "Dynamic Motion Edit",
    client: "Short Form Studio",
    category: "Reel",
    span: "md:col-span-6",
    image: "https://img.youtube.com/vi/ARjg0XJyIkc/maxresdefault.jpg",
    videoUrl: "https://youtube.com/shorts/ARjg0XJyIkc?feature=share"
  },
  {
    id: 23,
    title: "Urban Rhythms Reel",
    client: "Creative House",
    category: "Reel",
    span: "md:col-span-6",
    image: "https://img.youtube.com/vi/wNnxplOvkjE/maxresdefault.jpg",
    videoUrl: "https://youtube.com/shorts/wNnxplOvkjE?feature=share"
  }
];
