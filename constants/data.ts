import { icons } from "./icons";
import { images } from "./images";

export interface Activity {
  id: string;
  time: string;
  icon: string;
  name: string;
}

export interface Impact {
  id: string;
  name: string;
  value: string;
}

export interface HabitStackItem {
  id: string;
  title: string;
  duration: string;
  activities: Activity[];
  impacts: Impact[];
}

export const data: HabitStackItem[] = [
  {
    id: "1",
    title: "Morning optimizer",
    duration: "15 day streak",
    activities: [
      { id: "1", time: "7:00am", icon: icons.SunOutlined, name: "Sunlight" },
      { id: "2", time: "7:30am", icon: icons.Dumbel, name: "Exercise" },
      { id: "3", time: "8:00am", icon: icons.SunOutlined, name: "Breakfast" },
    ],
    impacts: [
      { id: "1", name: "Energy", value: "+32" },
      { id: "2", name: "Metabolism", value: "+92" },
      { id: "3", name: "Mood", value: "+28" },
    ],
  },
  {
    id: "2",
    title: "Focus booster",
    duration: "7 day streak",
    activities: [
      { id: "1", time: "9:00am", icon: icons.SunOutlined, name: "Reading" },
      { id: "2", time: "10:00am", icon: icons.Dumbel, name: "Coffee" },
      { id: "3", time: "10:30am", icon: icons.SunOutlined, name: "Meditation" },
    ],
    impacts: [
      { id: "1", name: "Focus", value: "+45" },
      { id: "2", name: "Clarity", value: "+40" },
      { id: "3", name: "Calmness", value: "+60" },
    ],
  },
  {
    id: "3",
    title: "Evening unwind",
    duration: "10 day streak",
    activities: [
      {
        id: "1",
        time: "6:00pm",
        icon: icons.SunOutlined,
        name: "Evening Walk",
      },
      { id: "2", time: "7:00pm", icon: icons.Dumbel, name: "Dinner" },
      { id: "3", time: "8:30pm", icon: icons.SunOutlined, name: "Reading" },
    ],
    impacts: [
      { id: "1", name: "Relaxation", value: "+75" },
      { id: "2", name: "Sleep Quality", value: "+85" },
      { id: "3", name: "Mood", value: "+30" },
    ],
  },
  {
    id: "4",
    title: "Weekend recharge",
    duration: "3 day streak",
    activities: [
      { id: "1", time: "8:00am", icon: icons.SunOutlined, name: "Hiking" },
      { id: "2", time: "12:00pm", icon: icons.Dumbel, name: "Healthy Meal" },
      {
        id: "3",
        time: "3:00pm",
        icon: icons.SunOutlined,
        name: "Listening to Music",
      },
    ],
    impacts: [
      { id: "1", name: "Energy", value: "+70" },
      { id: "2", name: "Happiness", value: "+80" },
      { id: "3", name: "Mental Clarity", value: "+50" },
    ],
  },
];

// ----------------------- analytics screen START ----------------------------------------------------

export type AnalyticsItem = {
  id: number;
  title: string;
  value: string;
  icon: any; // Icon component type
};

export const analytics: AnalyticsItem[] = [
  { id: 1, title: "VITALS", value: "92%", icon: icons.ArrowTrendUpWhite },
  { id: 2, title: "STRESS", value: "low", icon: icons.ArrowTrendDownWhite },
  { id: 3, title: "ENERGY", value: "high", icon: icons.ArrowTrendUpWhite },
];

export interface ITimeFilter {
  id: string;
  label: string;
}
export const timeFilters: ITimeFilter[] = [
  { id: "1m", label: "1m" },
  { id: "3m", label: "3m" },
  { id: "6m", label: "6m" },
  { id: "12m", label: "12m" },
];

export interface TimelineItem {
  id: string;
  date: string;
  title: string;
  description: string;
}

export const timelineData: TimelineItem[] = [
  {
    id: "1",
    date: "SEP 15",
    title: "New habit formed: Meditation practice",
    description: "You completed a 15-day streak",
  },
  {
    id: "2",
    date: "OCT 01",
    title: "Consistent sleep-wake cycle established",
    description: "You completed a 30-day morning routine streak",
  },
  {
    id: "3",
    date: "SEP 15",
    title: "New habit formed: Meditation practice",
    description: "You completed a 15-day streak",
  },
  {
    id: "4",
    date: "OCT 01",
    title: "Consistent sleep-wake cycle established",
    description: "You completed a 30-day morning routine streak",
  },
];

// -------------------------- analytics screen END   ------------------------------------------------------

// -------------------------- Health Insight START   ------------------------------------------------------

export interface Detail {
  text: string;
  actionText: string;
}

export interface Risk {
  type: string;
  text: string;
  color: string;
  bgColor: string;
  details: Detail[];
}

export interface IAssessedArea {
  id: string;
  title: string;
  icon: React.FC;
  risks: Risk[];
}

export const assessedAreasData: IAssessedArea[] = [
  {
    id: "1",
    title: "Heart & Circulation",
    icon: icons.Heart,
    risks: [
      {
        type: "High Risk",
        text: "1 high risk",
        color: "rgba(222, 65, 92, 1)",
        bgColor: "rgba(255, 0, 42, 0.1)",
        details: [{ text: "Chronic fatigue", actionText: "View" }],
      },
      {
        type: "Moderate",
        text: "1 moderate",
        color: "rgba(255, 165, 31, 1)",
        bgColor: "rgba(236, 145, 0, 0.1)",
        details: [{ text: "Sleep quality", actionText: "View" }],
      },
    ],
  },
  {
    id: "2",
    title: "Brain & Cognitive",
    icon: icons.Brain,
    risks: [
      {
        type: "High Risk",
        text: "1 high risk",
        color: "rgba(222, 65, 92, 1)",
        bgColor: "rgba(255, 0, 42, 0.1)",
        details: [{ text: "Chronic fatigue", actionText: "View" }],
      },
      {
        type: "Moderate",
        text: "1 moderate",
        color: "rgba(255, 165, 31, 1)",
        bgColor: "rgba(236, 145, 0, 0.1)",
        details: [{ text: "Sleep quality", actionText: "View" }],
      },
    ],
  },
  {
    id: "3",
    title: "Metabolism",
    icon: icons.Metabolism,
    risks: [
      {
        type: "Moderate",
        text: "1 moderate",
        color: "rgba(255, 165, 31, 1)",
        bgColor: "rgba(236, 145, 0, 0.1)",
        details: [{ text: "Sleep quality", actionText: "View" }],
      },
    ],
  },
  {
    id: "4",
    title: "Immunity",
    icon: icons.Shield,
    risks: [
      {
        type: "High Risk",
        text: "1 high risk",
        color: "rgba(222, 65, 92, 1)",
        bgColor: "rgba(255, 0, 42, 0.1)",
        details: [{ text: "Chronic fatigue", actionText: "View" }],
      },
    ],
  },
];

// -------------------------- Health Insight END   ------------------------------------------------------
//

// --------------------------  Tasks START  -------------------------------------------------------

export const todaysTasks = [
  {
    id: 1,
    title: "Hydration",
    cardLabel: "needs prep",
    energy: "+15%",
    recovery: "+25%",
    benefit: "Enhances vitamin D absorption",
    time: "10:00 am",
    duration: "10 mins",
    activityType: "outdoor",
    cardBgImage: images.waterBottle,
  },

  {
    id: 2,
    title: "Hydration",
    cardLabel: "needs prep",
    energy: "+15%",
    recovery: "+25%",
    benefit: "Enhances vitamin D absorption",
    time: "10:00 am",
    duration: "10 mins",
    activityType: "outdoor",
    cardBgImage: images.foodBowl,
  },
];

export const tommorowsTasks = [
  {
    id: 3,
    title: "Morining sunlight",
    energy: "+15%",
    recovery: "+25%",
    benefit: "Enhances vitamin D absorption",
    time: "7:00 am",
    duration: "10 mins",
    activityType: "outdoor",
    cardBgImage: images.foodBowl,
  },

  {
    id: 4,
    title: "Mid-day meal",
    cardLabel: "needs prep",
    energy: "+15%",
    recovery: "+25%",
    benefit: "Enhances vitamin D absorption",
    time: "7:00 am",
    duration: "10 mins",
    activityType: "outdoor",
    cardBgImage: images.foodBowl,
  },

  {
    id: 5,
    title: "Hydration",
    cardLabel: "needs prep",
    energy: "+15%",
    recovery: "+25%",
    benefit: "Enhances vitamin D absorption",
    time: "7:00 am",
    duration: "10 mins",
    activityType: "outdoor",
    cardBgImage: images.waterBottle,
  },
];

// --------------------------   Tasks END   ------------------------------------------------------

//
