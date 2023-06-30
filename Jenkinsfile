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
          sh 'npm init playwright @latest'
        }
      }
    }

    stage('Run tests') {
      steps {
        script {
          // Run Playwright tests
          sh 'npx playwright test'
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
