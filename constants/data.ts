import { icons } from "./icons";

export interface Activity {
  time: string;
  icon: string;
  name: string;
}

export interface Impact {
  name: string;
  value: string;
}

export interface HabitStackItem {
  id?: number;
  title: string;
  duration: string;
  activities: Activity[];
  impacts: Impact[];
}

export const data: HabitStackItem[] = [
  {
    id: 1,
    title: "Morning optimizer",
    duration: "15 day streak",
    activities: [
      { time: "7:00am", icon: icons.SunOutlined, name: "Sunlight" },
      { time: "7:30am", icon: icons.Dumbel, name: "Exercise" },
      { time: "8:00am", icon: icons.SunOutlined, name: "Breakfast" },
    ],
    impacts: [
      { name: "Energy", value: "+32%" },
      { name: "Metabolism", value: "+92%" },
      { name: "Mood", value: "+28%" },
    ],
  },
  {
    id: 2,
    title: "Focus booster",
    duration: "7 day streak",
    activities: [
      { time: "9:00am", icon: icons.SunOutlined, name: "Reading" },
      { time: "10:00am", icon: icons.Dumbel, name: "Coffee" },
      { time: "10:30am", icon: icons.SunOutlined, name: "Meditation" },
    ],
    impacts: [
      { name: "Focus", value: "+45%" },
      { name: "Clarity", value: "+40%" },
      { name: "Calmness", value: "+60%" },
    ],
  },
  {
    id: 3,
    title: "Evening unwind",
    duration: "10 day streak",
    activities: [
      { time: "6:00pm", icon: icons.SunOutlined, name: "Evening Walk" },
      { time: "7:00pm", icon: icons.Dumbel, name: "Dinner" },
      { time: "8:30pm", icon: icons.SunOutlined, name: "Reading" },
    ],
    impacts: [
      { name: "Relaxation", value: "+75%" },
      { name: "Sleep Quality", value: "+85%" },
      { name: "Mood", value: "+30%" },
    ],
  },
  {
    title: "Weekend recharge",
    duration: "3 day streak",
    activities: [
      { time: "8:00am", icon: icons.SunOutlined, name: "Hiking" },
      { time: "12:00pm", icon: icons.Dumbel, name: "Healthy Meal" },
      { time: "3:00pm", icon: icons.SunOutlined, name: "Listening to Music" },
    ],
    impacts: [
      { name: "Energy", value: "+70%" },
      { name: "Happiness", value: "+80%" },
      { name: "Mental Clarity", value: "+50%" },
    ],
  },
];
