import { makeAutoObservable } from "mobx";

class AuthStore {
  user: any = null;
  loading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setUser(user: any) {
    this.user = user;
  }

  setUserData(data: any) {
    this.user = data;
  }

  setLoading(loading: boolean) {
    this.loading = loading;
  }
}

const authStore = new AuthStore();
export default authStore;
