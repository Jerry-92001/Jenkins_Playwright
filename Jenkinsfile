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
  }

  post {
    always {
      // Clean up the workspace
      cleanWs()
    }
  }
}
