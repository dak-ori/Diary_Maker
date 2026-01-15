-- RLS Policies for Entries table

create policy "Users can view their own entries" on entries
  for select using (auth.uid() = user_id);

create policy "Users can create their own entries" on entries
  for insert with check (auth.uid() = user_id);

create policy "Users can update their own entries" on entries
  for update using (auth.uid() = user_id);

create policy "Users can delete their own entries" on entries
  for delete using (auth.uid() = user_id);
