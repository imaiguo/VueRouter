
export const auth = {
  isLoggedIn() {
    return false
    const token = localStorage.getItem("token");
    return !!token;
  }
}
