import http from "lib/Http";

export default class AuthService {
  static login(args) {
    return http.publicPost({
      endpoint: "/login",
      payload: args,
    });
  }

  static register(args) {
    return http.publicPost({
      endpoint: "/register",
      payload: args,
    });
  }

  static getCurrentUser() {
    return http.get({
      endpoint: "/me",
    });
  }

  static logout() {
    return http.post({
      endpoint: "/logout",
    });
  }

  static changePassword(args) {
    return http.post({
      endpoint: "/change-password",
      payload: args,
    });
  }

  static getIntervieweeProfile(args) {
    return http.get({
      endpoint: `/interviewee/${args}`,
    });
  }

  static getInterviewerProfile(args) {
    return http.get({
      endpoint: `/interviewer/${args}`,
    });
  }

  static getPendingInterview() {
    return http.get({
      endpoint: "/pendingInterview",
    });
  }

  static getPendingInterviewForInterviewee() {
    return http.get({
      endpoint: "/pendingInterview-interviewee",
    });
  }

  static getCompletedInterviewForInterviewee() {
    return http.get({
      endpoint: "/completedInterview-interviewee",
    });
  }

  static getScheduledInterviewForInterviewee() {
    return http.get({
      endpoint: "/scheduledInterview-interviewee",
    });
  }

  static getScheduledInterview() {
    return http.get({
      endpoint: "/scheduledInterview",
    });
  }

  static acceptInterview(args) {
    return http.post({
      endpoint: "/acceptInterview",
      payload: args,
    });
  }

  static rejectInterview(args) {
    return http.post({
      endpoint: "/rejectInterview",
      payload: args,
    });
  }

  static getInterviewerName() {
    return http.get({
      endpoint: "/interviewer-name",
    });
  }

  static getInterviewerBookedSlot(args) {
    return http.post({
      endpoint: "/interviewer-slot",
      payload: args,
    });
  }

  static getIntervieweeName() {
    return http.get({
      endpoint: "/interviewee-name",
    });
  }

  static scheduleInterview(args) {
    return http.post({
      endpoint: "/scheduleInterview",
      payload: args,
    });
  }

  //   static updatePunchIn() {
  //     return http.post({
  //       endpoint: "/punch-in",
  //     });
  //   }

  //   static updatePunchOut() {
  //     return http.post({
  //       endpoint: "/punch-out",
  //     });
  //   }

  //   static getAttendanceInfo(args) {
  //     return http.post({
  //       endpoint: "/my-attendance-info",
  //       payload: args,
  //     });
  //   }

  //   static applyLeave(args, config) {
  //     return http.post({
  //       endpoint: "/apply-leave",
  //       payload: args,
  //       config: config,
  //     });
  //   }

  //   static getLeaveInfo() {
  //     return http.get({
  //       endpoint: "/leave-info",
  //     });
  //   }

  //   static getSalaryBreakUp(args) {
  //     return http.post({
  //       endpoint: "/salary-breakups",
  //       payload: args,
  //     });
  //   }

  //   static updateBankDetails(args) {
  //     return http.post({
  //       endpoint: "/update-bank",
  //       payload: args,
  //     });
  //   }

  //   static getPaySlip(args) {
  //     return http.post({
  //       endpoint: "/payslip",
  //       payload: args,
  //     });
  //   }

  //   static createAnnouncements(args, config) {
  //     return http.post({
  //       endpoint: "/add-announcements",
  //       payload: args,
  //       config: config,
  //     });
  //   }

  //   static getMyLeaves(args) {
  //     return http.get({
  //       endpoint: `/my-leaves?limit=${args.limit}&page=${args.page}`,
  //     });
  //   }

  //   static searchUsers(args) {
  //     return http.get({
  //       endpoint: `/search?search=${args}`,
  //     });
  //   }
}
