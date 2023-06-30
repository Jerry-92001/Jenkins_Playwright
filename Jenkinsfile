pipeline {
  agent any

  tools {
    // Install Node.js
    nodejs 'NodeJS'
  }

  stages {
    stage('Install dependencies') {
      steps {
          // Install project dependencies
          sh 'sudo npm ci'
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
