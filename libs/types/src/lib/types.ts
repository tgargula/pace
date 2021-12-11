export type Priority = 'low' | 'medium' | 'high' | 'urgent';

export type Task = {
  id: string;
  name: string;
  deadline: Date;
  priority: Priority;
  minutesEstimation: number;
}

// FRONTEND TYPES
export type RepeatType  = 'day' | 'week' | 'month' | 'year' | 'no-repeat';

export type BasicDateType = {
  dateStart: Date | undefined;
  dateEnd: Date | undefined;
  isRepeated: boolean;
  repeatType: RepeatType | undefined;
}

export type Preference = {
  name: string;
  date: BasicDateType;
};


export type PreferencesState = {
  currentState: string;
  data: {
    EatingTimes: Preference[];
    SleepingTimes: Preference | null;
    OtherPreferences: Preference[];
  };
};

export const States = ['SleepingPreference', 'EatingPreference', 'OtherPreference'];