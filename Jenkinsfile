pipeline {
  agent any
  
    tools {
    // Install Node.js
    nodejs 'NodeJS'
  }

  stages {
    stage('Install dependencies') {
      steps {
        script {
          // Install project dependencies
          sh 'npm install'
        }
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
