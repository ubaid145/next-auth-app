const Host = process.env.HOST;

const api = {
  auth: {
    login: `${Host}/api/login/`,
    register: `${Host}/api/register/`,
    resetPasswordByLink: `${Host}/api/resetPasswordByLink/`,
    generatePasswordLink: `${Host}/api/generatePasswordLink/`,
    activateAcount: `${Host}/api/activate/`,
    resetPassword: `${Host}/api/resetPassword`,
  },
};

export default api;
