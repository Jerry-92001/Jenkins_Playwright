pipeline{
    agent any
    stages{
        stage('install playwright'){
            steps{
                sh '''
                npm i _d @playwright/test
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
                npm i _d @playwright/test
                npx playwright test
            ''' 
            }
        }
    }
}