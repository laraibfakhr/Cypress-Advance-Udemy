FROM cypress/included:13.11.0 
WORKDIR /app
COPY . /app
RUN npm install
RUN npx cypress verify
CMD [ "npx","cypress","run" ]