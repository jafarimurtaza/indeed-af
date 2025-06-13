import React from "react";

export default function RenderAboutIndeed() {
  return (
    <div className="flex gap-4 w-full h-auto">
      <div>
        <h1>About Indeed</h1>
        <p>
          Indeed is the #1 job site in the world1 and a global job matching and
          hiring platform. More people get hired on Indeed than any other site
          because we put job seekers first, giving them access to search for
          jobs, post resumes, research companies and more. With AI-powered
          technology, Indeed is transforming job matching and hiring. Every day,
          we connect millions of people to new opportunities.
        </p>

        <strong>
          Please note that Indeed and its affiliates are directly or indirectly
          owned by a publicly traded Japanese parent company, Recruit Holdings
          Co., Ltd.
        </strong>
      </div>

      <div>
        <img
          className="w-1/3"
          src="https://d341ezm4iqaae0.cloudfront.net/jobseeker/wp-content/uploads/2021/07/08192932/Image-Frame.png"
          alt="A woman looking"
        />
      </div>
    </div>
  );
}
