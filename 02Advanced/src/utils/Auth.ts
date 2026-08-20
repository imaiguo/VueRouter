
export const auth = {
  isLoggedIn() {
    const token = localStorage.getItem("token");
    return !!token;
  }
}
