pipeline {
  agent any

  stages {
    stage('Install dependencies') {
      steps {
        script {
          // Install Node.js
          def nodejsInstallation = tool 'NodeJS'
          env.PATH = "${nodejsInstallation}/bin:${env.PATH}"

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

    stage('Publish test results') {
      steps {
        script {
          // Publish test results
          junit 'test-results.xml'
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
