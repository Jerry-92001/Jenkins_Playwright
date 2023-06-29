pipeline {
  agent any

  stages {
    stage('Run tests') {
      steps {
        script {
          // Run Playwright test
          sh 'npm run test'
        }
      }
    }
  }

  post {
    always {
      // Archive test artifacts
      archiveArtifacts artifacts: 'tests-examples/**'

      // Clean up the workspace
      cleanWs()
    }
  }
}
