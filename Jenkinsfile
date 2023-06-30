pipeline{
  agent any

  stages{
    stage('test'){
      steps{
        sh '''
          sudo npx playwright test --list
          sudo npx playwright test
        '''
      }
    }
  }
}