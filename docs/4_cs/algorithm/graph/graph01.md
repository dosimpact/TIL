---
title: BFS | Graph | DFS 01
---

# 그래프

- 그래프의 DataStructure : 인접행렬 | 인접리스트 | 간선 리스트

- 그래프의 탐색 : DFS | BFS

- 연결요소개념 : 잘린 파편 그래프 조각을 연결요소, 컴포넌트라고 한다.

  1.  BFS|DFS 를 N번 돌려서 컴포넌트 수 N를 구할 수 있음

- 이분그래프 : A,B 두 그룹으로 노드를 나눔, 그룹안에 간선은 존재하지 않음

1. 탐색을 통해, check값을 1,2 로 번갈아 주면서 나눌 수 있음.

- 싸이클 찾기 : 순열, 반복 수열 등으로 문제를 wrap함, 1차수의 그래프로 보고 1차원 graph를 만든다음, 컴포넌트를 파악하는 문제.!!

- 플러드 필: graph가 배열 형태의 구조(인접행렬 아님!) -> | 1. 갈수있는지check | 2. 범위 check| 3. 방문여부 check 최소 3단계!

# BFS 시간 복잡도

인접 행렬 : V\*\*2
인접 리스트 : V+E

# sw1 - BFS,DFS

### 문제 유형 : DFS + BF

    - ABCDE  https://www.acmicpc.net/problem/13023
    특이점: DFS 문제, 깊이가 최대 5 이상 가능한지 파악하는 문제
    -DFS를 돌리는데 있어, BF 백트레킹을 사용해야한다.


    - 미친 로봇 https://www.acmicpc.net/problem/1405
    특이점 : DFS 재귀로 탐색, check 후 탐색> 종료 후 check 해체 해야함 !
    예외처리 :  재귀함수의 basecase의 순서가 있다. 먼저 실패여부를 따져야함. 그리고 성공 계산
    특이점 : 확률 기반 재귀함수가 발상이 어려웠음, 확률공간에 대한 이해가 필요.

### 문제 유형 : BFS 먼저 하고, 이동하는 경우

    - 탈출
    물을 먼저 이동시키고, 고숨이를 이동

    - 다리 건설 ?
    각 컴포넌트에서 check를 늘리고 난 다음에 전수 조사

    - 화산쇄설류 https://www.acmicpc.net/problem/16569
    특이점 : BFS 큐를 우선순위 큐로 돌리고, 조건에 맞을때만 deque 하여 탐색
    예외 처리 : 화산을 먼저 방문 시켜두면, 먼저 폭팔한 화산이 탐색을 다 못한다.

### 문제 유형 : 노드가 분리되는 경우 ( 최단경로 + 벽은 한번까지 부심 )

    - 가중치는 모두 동일하다. ( 벽을 부시는것은 가중치와 상관 없다. )
    - prev 노드에서 next 노드로 이동할때 조건이 걸린 문제.
    - 노드(상태)가 분리되는것은 2차원 배열로 점검한다.

    - 벽 부수고 이동하기 https://www.acmicpc.net/problem/2206

    특이점 :  최단거리 구하기, 이동 가중치는 벽을 부시나 안부시나 1로 동일
    - 벽은 한번만 부실 수 있다. -> 다른 노드로 전이
    - 3차원 check 배열 = [ X ] [ Y ] [ 벽을 부셨는가 여부 0 or 1 ] 를 기록해 나간다.

    *비교 : 벽 부수고 이동 VS 알고스팟 잘 비교하기. ?


    이모티콘 문제
    - (s,c) 이차원배열로 , (n,0~n) 까지의 노드를 모두 bfs 탐색을 통해 가 봐야함. - 사실 제일 먼저 도달하는 녀석을 구하면 됨.

### 문제 유형 : 다음 노드로 가는데 가중치가 다른 경우 ( 이동 가중치 0 + 벽 부수고 이동 가중치 1. )

    - prev 노드에서 next 노드로 이동할때 가중치가 다른 문제.
    - 높은 w 값으로 방문하면 최소비용이 아니므로, 낮은 가중치 방문을 우선 탐색하도록 힙큐(덱)을 이용한다.
    - 가중치 종류가 2개 라면 : 덱 사용 ( 낮은 가중치는 앞으로 넣는다. )
    - 가중치 종류가 3개 라면 : 힙큐 이용 ( 적은 비용으로 먼저 방문해야하니까 )


    - 알고스팟
    특이점 : 그냥 이동은  0 가중치, 벽을 부시고 이동은 1 가중치


    - 숨바꼭질3
    특이점 : 순간이동(0),걷기(1) => 순간이동을 먼저 다 q1으로 돌고 , q2로 간다.

# sw2 - BFS

## 문제 유형 : Q를 deque으로

    직관 : 리스트를 큐로 사용하기보단 deque를 되도록 사용하자.


    - 텔레포트 정거장 https://www.acmicpc.net/problem/18232
    특이점 : 리스트 큐 - 시간초과 , 덱 큐 - 시간 OK

## 문제 유형 : check를 Dict으로

    직관 : 메모리 초과 , eg) 10**9 개의 check가 필요

    - 퍼즐
    ( 9! 대략 40만 제한 ) 안에서 1 가중치로 탐색하는 문제
    특이점 : check 배열 대신에, check dict 를 사용해야한다.

    - A -> B https://www.acmicpc.net/problem/16953
    특이점 : 메모리 제한때문에, q 를 dict으로 사용

---

## 문제 유형 : 다음 노드 방문 조건이 까다로움

    - 거울설치 https://www.acmicpc.net/problem/2151
    특이점 : 다음 노드 탐색이 while문임 - 벽,끝,거울,종점 4가지 case 고려
    특이점 : check 배열 3차원에 dir 정보를 추가

## 문제 유형 : 문제의 경우를 탐색할때, 최소 조건이 들어간 경우

    - 숨바꼭질 4
    X -> X*2, X+1, X-1 을 1 가중치로 탐색하는 문제 ( 1만 노드 제한 )

    - DSLR
    (1 만 노드 제한 ) 안에서 4개의 계산 방법으로 1가중치로 탐색하는 문제
    특이점 : 왔던길을 trace 를  해야함 fromIdx 배열을 만들어서 저장


    - 물통
    ( 200 개의 노드 제한 ) 안에서 모두 탐색
    특이점 : 최소 탐색이 아닌, 완전 탐색문제 - BFS 이용해서 가능 ! , A,B,C 3개의 물통이 있지만, 3차원 배열이 필요가 없다. 총 물량은 동일


    - 숨바꼭질 2
    ( 10만개 노드 제한 ) 가중치 모두 1,
    특이점 : DP + BFS 섞인 문제 | BFS 로 기본적으로 탐색을 하되, ""최소""이지만 아쉽게 check를 못하는 경로의 수를 cnt 배열에 저장


    - 탈옥🤦‍♀️
    ( 100 X 100 탐색 ), 가중치 0,1 -> 덱으로 구현 , 죄수 두명을 탈출 시키는데 최소 문을 여는횟수

    특이점 : 최소 비용인데, 죄수 두명이 동시에 나가는 길에는 문을 한번만 열어도된다.
    무조건 죄수는 만나서 간다는 발상. => 식을 세움 : 밖으로부터 - Mpoint BFS + 죄수>Mpoint BFS + 죄수>Mpoint BFS
    그리고 문에서 만나는 경우 -2 로 문을 한번만 열도록 하는 경우


    - 열쇠
    100X100 탐색, 가중치 없음 , 최소비용 문제 아닌, 전체탐색 문제
    특이점 : 열쇠와 문이 존재해서, BFS를 돌다가 다시 뒤로가서 문을 열고 그 안을 DFS 해야한다.
    그래서 문 부분에서 임시 BFS 큐를 두고, 대기하다가 , 키를 획득하면 BFS 재개
