pipeline{
    agent any
    stages{
        stage('install playwright'){
            steps{
               sh '''
                  npm init playwright @latest
                  npx playwright install
            '''    
            }
        }
        stage('help'){
            steps{
                sh 'npx playwright test --help'
            }
        }
        stage('test'){
            steps{
              sh '''
                npm i -D @playwright/test
                npx playwright test
            ''' 
            }
        }
    }
}