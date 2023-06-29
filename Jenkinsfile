pipeline {
  agent any

  stages {
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
