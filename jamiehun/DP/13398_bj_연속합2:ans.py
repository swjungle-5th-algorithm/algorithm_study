import sys 
n = int(sys.stdin.readline())
list_n = [0] + list(map(int, sys.stdin.readline().split())) 
dp = [[0] * (n+1) for _ in range(2)]
# print(list_n)

ans = -1e9 
# dp의 첫번째 줄은 누적
# dp의 두번째 줄은 하나뺀 것
for i in range(1, n+1):
    temp = list_n[i]
    
    dp[0][i] = max(dp[0][i-1] + temp, temp)
    ans = max(ans, dp[0][i]) 

    
max_ans = -1e9
for j in range(1, n+1):
    temp = list_n[j]
    
    dp[1][j] = max(dp[0][j-1], dp[1][j-1] + temp)
    max_ans = max(ans, dp[1][j], max_ans)

print(max_ans)

    
