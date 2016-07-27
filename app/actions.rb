# Homepage (Root path)
get '/' do
  @contacts = Contact.all
  erb :index
end

post '/contacts' do
  # Create the new contact
  # Create a new JSON objec with the contact's details and pass it back down to Ajax
  # Ajax will create a new table entry for the contact and append it to the contact list
  contact = Contact.create!(name: params[:name], email: params[:email])
  if request.xhr?
    content_type :json 
    contact.to_json
  else
    redirect '/'
  end


end
