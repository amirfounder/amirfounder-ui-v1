export const colorPalette = [
  'rgba(255, 153, 153, 1)', 'rgba(255, 219, 153, 1)', 'rgba(153, 255, 153, 1)', 'rgba(153, 153, 255, 1)', 'rgba(255, 153, 255, 1)',
  'rgba(255, 102, 102, 1)', 'rgba(255, 201, 102, 1)', 'rgba(89, 222, 89, 1)', 'rgba(102, 102, 255, 1)', 'rgba(222, 89, 222, 1)',
  'rgba(255, 51, 51, 1)', 'rgba(255, 184, 51, 1)', 'rgba(32, 158, 32, 1)', 'rgba(51, 51, 255, 1)', 'rgba(158, 32, 158, 1)',
  'rgba(255, 0, 0, 1)', 'rgba(255, 165, 0, 1)', 'rgba(0, 128, 0, 1)', 'rgba(0, 0, 255, 1)', 'rgba(128, 0, 128, 1)',
]

export const dummyPipelineData = {
  dummyUserData: [
    {
      id: 1,
      firstName: 'Amir',
      lastName: 'Sharapov'
    }
  ],
  dummyTasksData: [
    {
      id: 1,
      projectId: 1,
      name: "Project 1- Task 1",
      stage: "Backlog",
      description: "Please complete the following tasks...",
      dateCreated: "2021-5-15",
      dateCompleted: null
    },
    {
      id: 2,
      projectId: 1,
      name: "Project 1- Task 3",
      stage: "Design",
      description: "Please complete the following tasks..."
    },
    {
      id: 3,
      name: "Project 1- Task 4",
      stage: "Develop",
      description: "Please complete the following tasks..."
    },
    {
      id: 4,
      projectId: 1,
      name: "Project 1- Task 5",
      stage: "QA",
      description: "Please complete the following tasks..."
    },
    {
      id: 5,
      projectId: 1,
      name: "Project 1- Task 6",
      stage: "Deployed",
      description: "Please complete the following tasks..."
    }
  ],
  dummyProjectsData: [
    {
      id: 1,
      name: "Project 1",
      status: "Active"
    },
    {
      id: 2,
      name: "Project 2",
      status: "Inactive"
    },
  ]
}