FROM golang:latest AS go
RUN mkdir -p /app/go
WORKDIR /app/go
COPY main.go .
RUN  go build -buildmode=c-shared -o main.so .

FROM python:3.8 AS django
RUN mkdir -p /app/backend
WORKDIR /app/backend
COPY requirements.txt /app/backend
RUN pip3 install --upgrade pip -r requirements.txt
COPY . /app/backend
COPY --from=0 /app/go/main.so /app/backend
EXPOSE 8000
CMD python3 manage.py runserver