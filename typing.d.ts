declare global {
  interface Window {
    snap: {
      pay?: (token: string) => void;
    };
  }
}

window.snap = window.snap || {};
window.snap.pay = window.snap.pay || function () {};
