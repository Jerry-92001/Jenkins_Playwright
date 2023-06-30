pipeline{
  agent any

  stages{
    stage('Setup Selenium Grid') {
      steps {
        // Start Selenium Grid hub
        bat 'docker run -d -p 4444:4444 --name selenium-hub selenium/hub:4.10.0-mercury'

        // Start Selenium Grid node(s)
        bat 'docker run -d --link selenium-hub:hub selenium/node-chrome:4.10.0-mercury'
        // bat 'docker run -d --link selenium-hub:hub selenium/node-firefox:4.10.0-mercury'

        // Wait for Selenium Grid to initialize
        sleep 20
      }
    }
    stage('install playwright'){
      steps{
          bat 'npm i -D @playwright/test'
          bat 'npx playwright install'

      }
    }
    stage('help'){
      steps{
        bat 'npx playwright test --help'
      }
    }
    stage('test'){
      steps{
          bat 'npx playwright test --list'
          bat 'npx playwright test'
          bat 'mvn test'

      }
    }
    stage('Cleanup Selenium Grid') {
      steps {
        // Stop and remove Selenium Grid containers
        sh 'docker stop selenium-hub'
        sh 'docker rm selenium-hub'
        sh 'docker rm $(docker ps -aq --filter="name=selenium-node")'
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