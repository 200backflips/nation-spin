import { create } from "zustand";

export type TimerDuration = 30 | 60 | 90 | 120;

export const TIMER_DURATIONS: TimerDuration[] = [30, 60, 90, 120];

const TICK_MS = 250;

let intervalId: ReturnType<typeof setInterval> | null = null;

const clearTimer = () => {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
};

const getRemainingSeconds = (endAt: number) =>
  Math.max(0, Math.ceil((endAt - Date.now()) / 1000));

interface CountdownStore {
  durationSeconds: TimerDuration;
  remainingSeconds: number;
  isRunning: boolean;
  endAt: number | null;
  setDuration: (seconds: TimerDuration) => void;
  start: (seconds?: TimerDuration) => void;
  pause: () => void;
  resume: () => void;
  reset: () => void;
  tick: () => void;
}

const useCountdown = create<CountdownStore>((set, get) => ({
  durationSeconds: 60,
  remainingSeconds: 60,
  isRunning: false,
  endAt: null,
  setDuration: (seconds) => {
    const { isRunning } = get();
    set({
      durationSeconds: seconds,
      ...(isRunning ? {} : { remainingSeconds: seconds }),
    });
  },
  start: (seconds) => {
    const { durationSeconds } = get();
    const duration = seconds ?? durationSeconds;
    const endAt = Date.now() + duration * 1000;

    clearTimer();
    set({
      durationSeconds: duration,
      remainingSeconds: duration,
      isRunning: true,
      endAt,
    });

    intervalId = setInterval(() => get().tick(), TICK_MS);
  },
  pause: () => {
    const { endAt } = get();
    clearTimer();

    const remainingSeconds = endAt
      ? getRemainingSeconds(endAt)
      : get().remainingSeconds;

    set({ isRunning: false, endAt: null, remainingSeconds });
  },
  resume: () => {
    const { isRunning, remainingSeconds } = get();
    if (isRunning || remainingSeconds <= 0) return;

    const endAt = Date.now() + remainingSeconds * 1000;
    set({ isRunning: true, endAt });
    clearTimer();
    intervalId = setInterval(() => get().tick(), TICK_MS);
  },
  reset: () => {
    clearTimer();
    const { durationSeconds } = get();
    set({
      isRunning: false,
      endAt: null,
      remainingSeconds: durationSeconds,
    });
  },
  tick: () => {
    const { endAt, isRunning } = get();
    if (!endAt || !isRunning) return;

    const remainingSeconds = getRemainingSeconds(endAt);

    if (remainingSeconds <= 0) {
      clearTimer();
      set({ remainingSeconds: 0, isRunning: false, endAt: null });
      return;
    }

    set({ remainingSeconds });
  },
}));

export default useCountdown;
