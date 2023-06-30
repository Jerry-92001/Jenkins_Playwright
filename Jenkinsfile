pipeline {
  agent any

  tools {
    // Install Node.js
    nodejs 'NodeJS'
  }

  stages {
    stage('Install dependencies') {
      steps {
          dir  'D:\\Playwright\\Jenkins_Playwright\\Jenkins_Playwright'
          // Install project dependencies
          sh 'npm ci'
      }
    }

    stage('Run tests') {
      steps {
        script {
          // Run Playwright tests
          sh 'npm test'
        }
      }
    }
  }

  post {
    always {
      // Clean up the workspace
      cleanWs()
    }
  }
}
