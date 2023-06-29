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
          sh 'npm ci'
        }
      }
    }

    stage('Run tests') {
      steps {
        script {
          // Run Playwright tests
          sh 'npm run test'
        }
      }
    }
  }

  post {
    always {
      // Archive test artifacts
      archiveArtifacts artifacts: 'test-results/**'

      // Clean up the workspace
      cleanWs()
    }
  }
}
